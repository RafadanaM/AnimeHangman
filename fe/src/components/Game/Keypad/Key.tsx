import { State } from "../../../utils/utils";

interface IKey {
  char: string;
  state: State | undefined;
  onClick: (param: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Key = ({ char, state, onClick }: IKey) => {
  const stateClass = state
    ? state === "correct"
      ? "bg-correct text-white hover:bg-correctHover"
      : "bg-red-500 text-white hover:bg-red-400"
    : "bg-baseCol hover:bg-gray-200 dark:hover:bg-baseCol";

  return (
    <button
      onClick={onClick(char)}
      className={`flex-1 border-none key-shadow ${stateClass} rounded select-none font-bold flex justify-center items-center uppercase transition-colors duration-500`}
    >
      {char}
    </button>
  );
};

export default Key;
