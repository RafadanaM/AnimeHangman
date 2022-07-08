import { useEffect, useRef, useState } from "react";
import StatsCard from "../components/Card/Stats/StatsCard";
import usePaginateStatistics from "../hooks/usePaginateStatistics";
import { GameData } from "../interfaces/GameData.interface";
import { ReactComponent as Loading } from "../assets/loading.svg";
import useObserver from "../hooks/useObserver";
import { LIMIT } from "../utils/utils";

const Stats = () => {
  const [hideFirst, setHideFirst] = useState(true);
  const [offset, setOffset] = useState(0);

  const { data, hasMore, loading } = usePaginateStatistics(offset);
  const divRef = useRef<HTMLDivElement | null>(null);
  const entry = useObserver(divRef, { rootMargin: "100px" }, [data]);

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting && hasMore) {
      setOffset((prevState) => prevState + 1);
    }
  }, [entry, hasMore]);

  useEffect(() => {
    const x = localStorage.getItem("gameData");
    if (x) {
      const data: GameData = JSON.parse(x);
      if (data?.status === "win") {
        setHideFirst(false);
      }
    }
  }, []);

  return (
    <div className="max-w-[1800px] mx-auto p-3">
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(21rem,1fr))] gap-3">
        {data.map((detail, idx) => {
          if (idx === 0 && hideFirst) return null;

          if (data.length === idx + 1)
            return (
              <StatsCard
                ref={divRef}
                key={detail.id}
                data={detail}
                delay={(idx % LIMIT) * 100}
              />
            );

          return (
            <StatsCard
              key={detail.id}
              data={detail}
              delay={(idx % LIMIT) * 100}
            />
          );
        })}
      </div>
      {loading && (
        <Loading className="fill-current w-10 h-10 animate-spin mx-auto mt-1 dark:fill-primary" />
      )}
    </div>
  );
};

export default Stats;
