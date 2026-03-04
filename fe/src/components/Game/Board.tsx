import { isAlphanumeric } from "../../utils/utils";
import Tile from "./Tiles/Tile";

interface IBoard {
  sentence: string;
}

const Board = ({ sentence }: IBoard) => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="w-full flex relative justify-center items-center flex-wrap gap-x-1 gap-y-3">
        {[...sentence].map((letter, id) => {
          return (
            <Tile
              key={id}
              withBorder={isAlphanumeric(letter) || letter === "_"}
              className={isAlphanumeric(letter) ? "correct" : ""}
              isFirstWord={id === 0 || (id > 0 && sentence[id - 1] === " ")}
            >
              {letter !== "_" && letter}
            </Tile>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
