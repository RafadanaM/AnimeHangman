import React from "react";
import StatDetail from "../../../interfaces/StatDetail.interface";
import StatsCard from "./StatsCard";
interface IStatsCardGrid {
  data: StatDetail[];
  hideFirst: boolean;
}
const StatsCardGrid = ({ data, hideFirst }: IStatsCardGrid) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(21rem,1fr))] gap-3">
      {data.map((detail, idx) => {
        if (idx === 0 && hideFirst) return null;

        return <StatsCard key={detail.id} data={detail} />;
      })}
    </div>
  );
};

export default StatsCardGrid;
