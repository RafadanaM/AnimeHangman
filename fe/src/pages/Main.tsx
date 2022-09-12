import { useEffect, useState } from "react";
import useGame from "../hooks/useGame";
import Board from "../components/Game/Board";
import Keypad from "../components/Game/Keypad/Keypad";
import WrongTiles from "../components/Game/Tiles/WrongTiles";
import { ReactComponent as Loading } from "../assets/loading.svg";
import Hints from "../components/Game/Hints/Hints";
import ErrorModal from "../components/Modal/ErrorModal/ErrorModal";
import Modal from "../components/Modal/AnimeDetailModal/Modal";
import { ModalStatus } from "../utils/utils";
import { generateCurrentDate } from "../utils/date.utils";

const Main = () => {
  const [modal, setModal] = useState<ModalStatus>("close");
  const {
    currentGuess,
    handleKeyUp,
    handleOnClick,
    wrongCount,
    history,
    status,
    max_life,
    title,
    genres,
    animeDetail,
    year,
    boardLoading,
    detailLoading,
    media_type,
    date,
    handleAnimationEnd,
  } = useGame();

  const handleCloseModal = () => {
    setModal("close");
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  useEffect(() => {
    const isLoseOrWin = status === "lose" || status === "win";
    if (isLoseOrWin && detailLoading === "loading") {
      setModal("loading");
    } else if (
      isLoseOrWin &&
      (detailLoading === "success" || detailLoading === "initial") &&
      animeDetail.id > 0 &&
      date === generateCurrentDate()
    ) {
      setModal("open");
    }
  }, [status, detailLoading, animeDetail.id, date]);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[1024px] 2xl:w-[1440px] max-w-full h-[calc(100%-64px)] mx-auto gap-y-2 py-3 px-2 md:px-0">
        {boardLoading ? (
          <Loading className="dark:fill-primary w-10 h-10 animate-spin" />
        ) : (
          <>
            <WrongTiles
              wrongNumber={wrongCount}
              maxLife={max_life}
              onTransitionEnd={handleAnimationEnd}
            />
            <Board
              sentence={currentGuess}
              onAnimationEnd={handleAnimationEnd}
            />
            <Hints genres={genres} media_type={media_type} year={year} />
            <Keypad keyHistory={history} onClick={handleOnClick} />
          </>
        )}
      </div>
      {status === "error" && <ErrorModal />}

      {modal !== "close" && (
        <Modal
          type={media_type}
          modalStatus={modal}
          wrongCount={wrongCount}
          maxLife={max_life}
          title={title}
          genres={genres}
          animeDetail={animeDetail}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Main;
