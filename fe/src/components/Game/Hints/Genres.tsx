import React from "react";
import Hint from "./Hint";
interface IGenres {
  genres: string;
  size?: "small" | "normal";
}
const Genres = ({ genres, size = "normal" }: IGenres) => {
  return (
    <ul
      className={`inline-flex items-center gap-2 flex-wrap ${
        size === "normal" ? "" : "text-sm"
      }`}
    >
      {genres.split(",").map((genre) => (
        <Hint key={genre} content={genre} size={size} />
      ))}
    </ul>
  );
};

export default React.memo(Genres);
