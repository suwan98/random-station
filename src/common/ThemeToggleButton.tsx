import {useRecoilState} from "recoil";
import {themeAtom} from "../states/recoil/themeAtom";
import {FiMoon, FiSun} from "react-icons/fi";
import {useEffect} from "react";

function ThemeToggleButton() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  /* 새로고침시에도 테마 유지하기 */

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="cursor-pointer pb-6 top-12 right-12 absolute">
      {theme === "light" ? <FiSun size={30} /> : <FiMoon size={30} />}
    </button>
  );
}

export default ThemeToggleButton;
