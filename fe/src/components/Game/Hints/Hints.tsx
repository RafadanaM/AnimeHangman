import { ReactComponent as Close } from "../../../assets/x.svg";
import { useState } from "react";
import Genres from "./Genres";
import Hint from "./Hint";

interface IHints {
  media_type?: string;
  genres?: string;
  year?: number;
}

const Hints = ({ genres, media_type, year }: IHints) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return isOpen ? (
    <div className="flex items-center gap-2 flex-wrap">
      <Close
        className="cursor-pointer text-gray-700 dark:text-white stroke-current"
        onClick={toggleOpen}
      />
      {media_type && <Hint content={media_type} />}
      {year && year > 0 ? <Hint content={String(year)} /> : null}
      {genres && <Genres genres={genres} />}
    </div>
  ) : (
    <button
      onClick={toggleOpen}
      className="capitalize font-semibold py-1 px-1.5 text-sm md:text-base rounded-md text-gray-700 dark:text-slate-200 bg-baseCol dark:bg-slate-700"
    >
      Reveal Hints
    </button>
  );
};

export default Hints;
