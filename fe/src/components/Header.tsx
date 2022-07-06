import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Chart } from "../assets/chart.svg";
import { ReactComponent as Controller } from "../assets/controller.svg";
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
    <header className="flex justify-center items-center h-16 shadow-md dark:shadow-slate-700 bg-white dark:bg-slate-800">
      <div className="w-full h-full py-2 px-1 md:px-3 flex items-center">
        <div className="flex-1">
          <Moon
            className="icon-container icon w-6 h-6 md:w-10 md:h-10"
            onClick={toggleDarkMode}
          />
        </div>
        <h1 className="font-bold text-lg md:text-4xl font-mono dark:text-white">
          Guess The Anime Title!
        </h1>
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
