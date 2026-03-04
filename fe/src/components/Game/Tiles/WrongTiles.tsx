import WrongTile from "./WrongTile";

interface IWrongTiles {
  wrongNumber: number;
  maxLife: number;
}

const WrongTiles = ({ wrongNumber, maxLife }: IWrongTiles) => {
  return (
    <div className="flex gap-x-1 flex-wrap">
      {[...Array(maxLife)].map((_, id) => (
        <WrongTile key={id} isWrong={id < wrongNumber} />
      ))}
    </div>
  );
};

export default WrongTiles;
