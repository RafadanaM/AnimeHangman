import { memo } from "react";
import { ReactComponent as Close } from "../../../assets/x.svg";

interface IWrongTile {
  isWrong: boolean;
}

const WrongTile = ({ isWrong }: IWrongTile) => {
  return (
    <div
      className={`h-12 md:h-14 rounded transition-colors duration-500 p-2 ${
        isWrong ? "bg-error" : "bg-secondary dark:bg-secondary-darker"
      }`}
    >
      <Close
        className={`h-full w-auto transition-colors duration-500 ${
          isWrong ? "fill-primary" : "fill-primary dark:fill-secondary-dark"
        }`}
      />
    </div>
  );
};

export default memo(WrongTile);
