import { State, Status } from "../utils/utils";

export interface GameData {
  currentGuess: string;
  wrongCount: number;
  history: Record<string, State>;
  status: Status;
  date: string;
  title: string;
  max_life: number;
  genres: string;
  release_year: number;
  shouldFetch: boolean;
  media_type: string;
}
