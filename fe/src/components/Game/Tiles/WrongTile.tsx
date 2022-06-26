import { memo } from "react";
import { ReactComponent as Close } from "../../../assets/x.svg";

interface IWrongTile {
  isWrong: boolean;
}

const WrongTile = ({ isWrong }: IWrongTile) => {
  return (
    <div
      className={`h-12 md:h-14 rounded transition-colors duration-500 p-2 ${
        isWrong ? "bg-red-500" : "bg-baseCol dark:bg-slate-700"
      }`}
    >
      <Close
        className={`h-full w-auto transition-colors duration-500 ${
          isWrong ? "fill-white" : "fill-white dark:fill-slate-500"
        }`}
      />
    </div>
  );
};

export default memo(WrongTile);
