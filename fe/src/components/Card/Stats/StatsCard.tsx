import React, { memo, forwardRef } from "react";
import StatDetail from "../../../interfaces/StatDetail.interface";

interface IStatCard {
  data: StatDetail;
}

const StatsCard = forwardRef<HTMLDivElement | null, IStatCard>(
  ({ data }, ref) => {
    const calcPercentage = (win: number, participants: number) => {
      let result = "0";
      if (participants > 0) {
        result = ((win * 100) / participants).toFixed(2);
      }
      return result;
    };

    return (
      <div
        ref={ref}
        className=" bg-white dark:bg-slate-900 h-40 rounded-md p-2 shadow-lg border dark:border-slate-600 flex overflow-hidden divide-x-2 gap-2"
      >
        <div className="rounded overflow-hidden border border-gray-500">
          <img className="h-full w-auto" src={data.anime.image} alt="cover" />
        </div>
        <div className="flex-1 pl-2 h-full ">
          <a
            className="font-semibold text-blue-600 dark:text-blue-300 before:content-['_↗__'] cursor-pointer "
            href={`https://myanimelist.net/anime/${data.anime_id}}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.anime.title}
          </a>
          <ul className="text-sm font-medium dark:text-white">
            <li>Participants: {data.participant}</li>
            <li>Average Tries: {data.avg_tries.slice(0, 3)}</li>
            <li>
              Percent Completed: {calcPercentage(data.win, data.participant)}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
);

export default memo(StatsCard);
