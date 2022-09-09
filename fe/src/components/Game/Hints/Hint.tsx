import React from "react";
import Skeleton from "react-loading-skeleton";

interface IHint {
  content: string;
  size?: "small" | "normal";
  isLoading?: boolean;
}

const Hint = ({ content, size = "normal", isLoading }: IHint) => {
  return !isLoading ? (
    <li
      className={`capitalize font-semibold ${
        size === "normal" ? "py-1 px-1.5 text-sm md:text-base" : "px-1 py-0.5"
      } rounded-md dark:text-secondary bg-secondary dark:bg-secondary-darker`}
    >
      {content}
    </li>
  ) : (
    <div className="w-16">
      <Skeleton className="p-1" />
    </div>
  );
};

export default React.memo(Hint);
