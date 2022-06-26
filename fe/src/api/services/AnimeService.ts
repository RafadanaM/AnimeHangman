import AnimeDetailResponse from "../../interfaces/AnimeDetailResponse.interface";
import AnimeResponse from "../../interfaces/AnimeResponse.interface";

import api from "../api";

const BASE_SERVICE_URL = "/anime";

export const AnimeService = {
  getAnimeByDate: async (date: string) => {
    const res = await api.get<AnimeResponse>(
      `${BASE_SERVICE_URL}/?date=${date}`
    );
    return res.data;
  },

  getAnimeDetailByDate: async (date: string) => {
    const res = await api.get<AnimeDetailResponse>(
      `${BASE_SERVICE_URL}/detail?date=${date}`
    );
    return res.data;
  },
};
