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
    <ul className="flex items-center gap-2 flex-wrap">
      <Close
        className="cursor-pointer dark:text-secondary stroke-current"
        onClick={toggleOpen}
      />
      {media_type && <Hint content={media_type} />}
      {year && year > 0 ? <Hint content={String(year)} /> : null}
      {genres && <Genres genres={genres} />}
    </ul>
  ) : (
    <button
      onClick={toggleOpen}
      className="capitalize font-semibold py-1 px-1.5 text-sm md:text-base rounded-md dark:text-secondary bg-secondary dark:bg-secondary-darker"
    >
      Reveal Hints
    </button>
  );
};

export default Hints;
