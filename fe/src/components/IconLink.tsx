import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IIconLink {
  to: string;
  element: ReactNode;
}

const IconLink = ({ to, element }: IIconLink) => {
  return (
    <Link to={to}>
      <div className="icon-container flex items-center justify-center ">
        {element}
      </div>
    </Link>
  );
};

export default IconLink;
