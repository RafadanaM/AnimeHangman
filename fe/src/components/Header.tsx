import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Chart } from "../assets/chart.svg";
import { ReactComponent as Controller } from "../assets/controller.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import useDarkMode from "../hooks/useDarkMode";
import { Link, useLocation } from "react-router-dom";
import IconLink from "./IconLink";

const Header = () => {
  const { theme, setTheme } = useDarkMode();
  const location = useLocation();

  const toggleDarkMode = () => {
    setTheme(theme);
  };

  return (
    <header className="flex justify-center items-center h-16 shadow-md dark:shadow-none bg-white dark:bg-slate-900 ">
      <div className="w-full h-full py-2 px-1 md:px-3 flex items-center">
        <div className="flex-1">
          <Moon className="icon-container icon" onClick={toggleDarkMode} />
        </div>
        <Link to="/">
          <Logo className="w-48 md:w-72 h-auto dark:fill-white " />
        </Link>

        <div className="flex-1 flex items-center justify-end gap-x-0.5">
          {location.pathname === "/" && (
            <IconLink
              to="/stats"
              element={<Chart className="icon h-full w-full" />}
            />
          )}
          {location.pathname === "/stats" && (
            <IconLink
              to="/"
              element={<Controller className="icon h-full w-full" />}
            />
          )}
          <Github className="icon-container icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
