import React from "react";

interface IHint {
  content: string;
  size?: "small" | "normal";
}

const Hint = ({ content, size = "normal" }: IHint) => {
  return (
    <div
      className={`capitalize font-semibold ${
        size === "normal" ? "py-1 px-1.5 text-sm md:text-base" : "px-1 py-0.5"
      } rounded-md text-gray-700 dark:text-slate-200 bg-baseCol dark:bg-slate-700`}
    >
      {content}
    </div>
  );
};

export default React.memo(Hint);
