import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IIconLink {
  to: string;
  element: ReactNode;
}

const IconLink = ({ to, element }: IIconLink) => {
  return (
    <Link to={to}>
      <div className="icon-container flex items-center justify-center w-6 h-6 md:w-10 md:h-10">
        {element}
      </div>
    </Link>
  );
};

export default IconLink;
