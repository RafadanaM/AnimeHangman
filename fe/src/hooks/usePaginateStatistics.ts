import { useEffect, useState } from "react";
import { StatisticService } from "../api/services/StatisticService";
import StatDetail from "../interfaces/StatDetail.interface";
import { LIMIT } from "../utils/utils";

const usePaginateStatistics = (offset: number) => {
  const [data, setData] = useState<StatDetail[]>([]);
  // It is better to have string loading state(e.g "loading" | "complete" |"error" | "initial" etc) for finer control, but this is simple so it's fine
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const getStats = async (offset: number) => {
      try {
        setLoading(true);
        const data = await StatisticService.getStatsUntilToday(offset * LIMIT);

        if (data.stats.length > 0) {
          setData((prevState) => [...prevState, ...data.stats]);
        }
        setHasMore(data.stats.length > 0);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getStats(offset);
  }, [offset]);

  return { data, loading, hasMore };
};

export default usePaginateStatistics;
