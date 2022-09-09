import WrongTile from "./WrongTile";

interface IWrongTiles {
  wrongNumber: number;
  maxLife: number;
  onTransitionEnd: React.TransitionEventHandler<HTMLDivElement>
}

const WrongTiles = ({ wrongNumber, maxLife, onTransitionEnd }: IWrongTiles) => {
  return (
    <div className="flex gap-x-1 flex-wrap">
      {[...Array(maxLife)].map((_, id) => (
        <WrongTile key={id} isWrong={id < wrongNumber} onTransitionEnd={onTransitionEnd} />
      ))}
    </div>
  );
};

export default WrongTiles;
