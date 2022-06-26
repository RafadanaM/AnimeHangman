import AnimeDetailResponse from "../interfaces/AnimeDetailResponse.interface";
import { GameData } from "../interfaces/GameData.interface";
import { generateCurrentDate } from "./date.utils";

export const initialGameData: GameData = {
  currentGuess: "",
  wrongCount: 0,
  history: {},
  status: "in_progress",
  date: generateCurrentDate(),
  title: "",
  max_life: 5,
  genres: "",
  release_year: 0,
  shouldFetch: true,
  media_type: "unknown"
};

export const initialAnimeDetail: AnimeDetailResponse = {
  id: 0,
  description: "",
  image: "",
  mean_score: 0,
  rank: 0,
  status: "",
};
