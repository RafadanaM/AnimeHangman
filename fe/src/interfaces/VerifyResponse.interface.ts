import AnimeDetailResponse from "./AnimeDetailResponse.interface";

interface VerifyResponse {
  isCorrect: boolean;
  anime: AnimeDetailResponse;
}
export default VerifyResponse;
