import { memo, forwardRef, useRef, useEffect, useState } from "react";
import useObserver from "../../../hooks/useObserver";
import StatDetail from "../../../interfaces/StatDetail.interface";
import { mergeRefs } from "../../../utils/mergeRefs";
import Image from "../../Image";

interface IStatCard {
  data: StatDetail;
  delay: number;
}

const StatsCard = forwardRef<HTMLDivElement | null, IStatCard>(
  ({ data, delay }, ref) => {
    const [visible, setVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const entry = useObserver(cardRef);

    useEffect(() => {
      if (!entry) return;
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, [entry]);

    const calcPercentage = (win: number, participants: number) => {
      let result = "0";
      if (participants > 0) {
        result = ((win * 100) / participants).toFixed(2);
      }
      return result;
    };

    return (
      <div
        ref={mergeRefs(cardRef, ref)}
        style={{ transitionDelay: `${delay}ms` }}
        className={`bg-white dark:bg-slate-900 h-40 rounded-md p-2 shadow-lg border dark:border-slate-600 flex overflow-hidden divide-x-2 gap-2 transition-all ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
        }`}
      >
        <div className="rounded overflow-hidden border border-gray-500">
          <Image className="h-full w-24" src={data.anime.image} alt="cover" />
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
