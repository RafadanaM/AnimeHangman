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
    <header className="flex justify-center items-center h-16 border-b-2 dark:border-secondary-dark bg-primary dark:bg-primary-darker">
      <div className="w-full h-full py-2 px-1 md:px-3 flex justify-between items-center">
        <Moon
          aria-label="Dark mode"
          className="icon-container icon"
          onClick={toggleDarkMode}
        />

        <Link to="/">
          <Logo className="w-48 md:w-72 h-auto dark:fill-primary " />
        </Link>

        <nav>
          <ul aria-label="navigation" className="flex">
            {location.pathname === "/" && (
              <li aria-label="statistics">
                <IconLink
                  to="/stats"
                  element={<Chart className="icon h-full w-full" />}
                />
              </li>
            )}
            {location.pathname === "/stats" && (
              <li aria-label="Github">
                <IconLink
                  to="/"
                  element={<Controller className="icon h-full w-full" />}
                />
              </li>
            )}
            <Github className="icon-container icon" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
