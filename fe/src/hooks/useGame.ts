import { useCallback, useEffect, useState } from "react";
import { AnimeService } from "../api/services/AnimeService";
import { StatisticService } from "../api/services/StatisticService";
import { differenceToTomorrow, generateCurrentDate } from "../utils/date.utils";
import { initialAnimeDetail, initialGameData } from "../utils/gameRule";
import { alphaNumeric, isAlphanumeric, LoadingStatus } from "../utils/utils";
import useLocalStorage from "./useLocalStorage";

const useGame = () => {
  const [boardLoading, setBoardLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState<LoadingStatus>("initial");
  const [gameData, setGameData] = useLocalStorage("gameData", initialGameData);

  const [animeDetail, setAnimeDetail] = useLocalStorage(
    "animeDetail",
    initialAnimeDetail
  );

  const handleAnimationEnd = async () => {
    if (detailLoading !== "initial") return;
    try {
      if (
        (gameData.status === "lose" || gameData.status === "win") &&
        animeDetail.id === initialAnimeDetail.id
      ) {
        setDetailLoading("loading");
        const data = await AnimeService.getAnimeDetailByDate(gameData.date);

        setAnimeDetail(data);
        setDetailLoading("success");
      }
    } catch (error) {
      setGameData((prevState) => ({ ...prevState, status: "error" }));
      setDetailLoading("error");
    }
  };

  useEffect(() => {
    const currentDateString = generateCurrentDate();
    const fetchData = async (currentDateString: string) => {
      try {
        setBoardLoading(true);
        const data = await AnimeService.getAnimeByDate(currentDateString);
        if (!data) {
          setGameData({ ...initialGameData, status: "error" });
          setBoardLoading(false);
          return;
        }
        await StatisticService.participate(currentDateString);
        setGameData({
          status: "in_progress",
          currentGuess: data.title.toUpperCase().replace(alphaNumeric, "_"),
          title: data.title.toUpperCase(),
          max_life: data.life,
          genres: data.genres,
          date: data.date,
          release_year: data.release_year,
          shouldFetch: false,
          history: {},
          wrongCount: 0,
          media_type: data.media_type,
        });
      } catch {
        setGameData({ ...initialGameData, status: "error" });
      } finally {
        setBoardLoading(false);
      }
    };

    if (currentDateString !== gameData.date || gameData.shouldFetch) {
      setAnimeDetail(initialAnimeDetail);
      fetchData(currentDateString);
    }
  }, [gameData.date, gameData.shouldFetch, setAnimeDetail, setGameData]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setGameData((prevState) => ({
        ...prevState,
        shouldFetch: true,
      }));
      setAnimeDetail({ ...initialAnimeDetail });
    }, (differenceToTomorrow() + 1) * 1000);

    return () => clearTimeout(timer);
  }, [setAnimeDetail, setGameData]);

  const addNewGuess = useCallback(
    async (character: string) => {
      let history = { ...gameData.history };
      let currentGuess = gameData.currentGuess;
      let status = gameData.status;
      let wrongCount = gameData.wrongCount;

      if (history[character] !== undefined) {
        return;
      }
      const guessArr = [...gameData.currentGuess];
      if (gameData.title.includes(character)) {
        [...gameData.title].forEach((x, index) => {
          if (x === character) {
            guessArr[index] = character;
          }
        });
        const guess = guessArr.join("");
        currentGuess = guess;
        if (guess === gameData.title) {
          try {
            const data = await AnimeService.verifyAnswer(
              currentGuess,
              gameData.wrongCount,
              gameData.date
            );
            status = data.isCorrect ? "win" : "lose";
          } catch (error) {
            // error handling
            status = "error";
          }
        }
        history[character] = "correct";
      } else {
        const nextWrongCount = wrongCount + 1;
        wrongCount = nextWrongCount;
        if (nextWrongCount >= gameData.max_life) {
          status = "lose";
        }

        history[character] = "incorrect";
      }

      setGameData((prevState) => ({
        ...prevState,
        currentGuess,
        status,
        history: { ...history },
        wrongCount: wrongCount,
      }));
    },
    [
      gameData.currentGuess,
      gameData.date,
      gameData.history,
      gameData.max_life,
      gameData.status,
      gameData.title,
      gameData.wrongCount,
      setGameData,
    ]
  );

  const handleOnClick = useCallback(
    (character: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (
        gameData.status === "win" ||
        gameData.status === "lose" ||
        gameData.wrongCount >= gameData.max_life ||
        boardLoading
      ) {
        return;
      }

      if (isAlphanumeric(character) && character.length === 1) {
        addNewGuess(character.toUpperCase());
      }
    },
    [
      addNewGuess,
      gameData.max_life,
      gameData.status,
      gameData.wrongCount,
      boardLoading,
    ]
  );

  const handleKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (
        gameData.status === "win" ||
        gameData.status === "lose" ||
        gameData.wrongCount >= gameData.max_life ||
        boardLoading
      ) {
        return;
      }

      if (isAlphanumeric(key) && key.length === 1) {
        addNewGuess(key.toUpperCase());
      }
    },
    [
      addNewGuess,
      gameData.max_life,
      gameData.status,
      gameData.wrongCount,
      boardLoading,
    ]
  );

  return {
    currentGuess: gameData.currentGuess,
    wrongCount: gameData.wrongCount,
    handleKeyUp,
    handleOnClick,
    status: gameData.status,
    history: gameData.history,
    max_life: gameData.max_life,
    date: gameData.date,
    genres: gameData.genres,
    title: gameData.title,
    year: gameData.release_year,
    media_type: gameData.media_type,
    boardLoading,
    detailLoading,
    handleAnimationEnd,
    animeDetail,
  };
};
export default useGame;
