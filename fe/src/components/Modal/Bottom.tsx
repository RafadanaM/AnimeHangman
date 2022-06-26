import { ReactNode } from "react";

interface IBottom {
  title: string;
  children?: ReactNode;
}
const Bottom = ({ title, children }: IBottom) => {
  return (
    <div className="flex-1 text-center uppercase">
      <span className="block">{title}</span>
      {children && children}
    </div>
  );
};

export default Bottom;
