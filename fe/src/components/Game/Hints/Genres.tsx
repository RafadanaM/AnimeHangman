import React from "react";
import Hint from "./Hint";
interface IGenres {
  genres: string;
  size?: "small" | "normal";
  isLoading?: boolean;
}
const Genres = ({ genres, size = "normal", isLoading }: IGenres) => {
  return (
    <ul
      className={`inline-flex items-center gap-2 flex-wrap ${
        size === "normal" ? "" : "text-sm"
      }`}
    >
      {genres.split(",").map((genre) => (
        <Hint key={genre} content={genre} size={size} isLoading={isLoading} />
      ))}
    </ul>
  );
};

export default React.memo(Genres);
