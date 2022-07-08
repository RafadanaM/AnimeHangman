import { State } from "../../../utils/utils";

interface IKey {
  char: string;
  state: State | undefined;
  onClick: (param: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Key = ({ char, state, onClick }: IKey) => {
  const stateClass = state
    ? state === "correct"
      ? "bg-success text-primary hover:bg-success-light"
      : "bg-error text-primary hover:bg-error-light"
    : "bg-secondary hover:bg-secondary-light dark:bg-secondary-light dark:hover:bg-secondary";

  return (
    <button
      onClick={onClick(char)}
      className={`flex-1 border-none shadow-md ${stateClass} rounded select-none font-bold flex justify-center items-center uppercase transition-colors duration-500`}
    >
      {char}
    </button>
  );
};

export default Key;
