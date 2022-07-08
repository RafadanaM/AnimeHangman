import React from "react";

interface IHint {
  content: string;
  size?: "small" | "normal";
}

const Hint = ({ content, size = "normal" }: IHint) => {
  return (
    <li
      className={`capitalize font-semibold ${
        size === "normal" ? "py-1 px-1.5 text-sm md:text-base" : "px-1 py-0.5"
      } rounded-md dark:text-secondary bg-secondary dark:bg-secondary-darker`}
    >
      {content}
    </li>
  );
};

export default React.memo(Hint);
