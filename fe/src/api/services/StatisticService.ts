import StatisticsResponse from "../../interfaces/StatisticsResponse.interface";
import { generateCurrentDate } from "../../utils/date.utils";
import api from "../api";

const BASE_SERVICE_URL = "/statistics";

export const StatisticService = {
  getStatsUntilToday: async (offset: number) => {
    const currentDate = generateCurrentDate();
    const res = await api.get<StatisticsResponse>(
      `${BASE_SERVICE_URL}/?date=${currentDate}&offset=${offset}&limit=5`
    );

    return res.data;
  },

  participate: async (date: string) => {
    await api.patch(`${BASE_SERVICE_URL}/participate`, {
      date: date,
    });
  },

  win: async (anime_id: number, tries: number) => {
    await api.patch(`${BASE_SERVICE_URL}/win`, {
      anime_id,
      tries,
    });
  },
};
