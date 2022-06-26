import { keys, State } from "../../../utils/utils";
import EmptyKey from "./EmptyKey";
import Key from "./Key";

interface IKeypad {
  keyHistory: Record<string, State>;
  onClick: (param: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Keypad = ({ keyHistory, onClick }: IKeypad) => {
  return (
    <div className="flex flex-col justify-center items-center h-48 sm:h-64 max-h-full max-w-full w-[660px] gap-y-1.5">
      {Object.entries(keys).map(([row, vals]) => (
        <div className="flex w-full h-full gap-x-1" key={row}>
          <EmptyKey row={row} key={`first-${row}`} />
          {vals.map(({ key }) => (
            <Key
              key={key}
              char={key}
              onClick={onClick}
              state={keyHistory[key]}
            />
          ))}
          <EmptyKey row={row} key={`second-${row}`} />
        </div>
      ))}
    </div>
  );
};

export default Keypad;
