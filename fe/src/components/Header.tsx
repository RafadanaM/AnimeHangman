import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const { theme, setTheme } = useDarkMode();

  const toggleDarkMode = () => {
    setTheme(theme);
  };

  return (
    <header className="flex justify-center items-center h-16 shadow-md dark:shadow-slate-700 bg-white dark:bg-slate-800">
      <div className="w-full h-full py-2 px-1 md:px-3 flex items-center before:content-[''] before:flex-1">
        <span className="font-bold text-lg md:text-4xl font-mono dark:text-white">
          Guess The Anime Title!
        </span>
        <div className="flex-1 flex items-center justify-end gap-x-1">
          <Moon
            className="icon w-6 h-6 md:w-10 md:h-10"
            onClick={toggleDarkMode}
          />
          <Github className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
