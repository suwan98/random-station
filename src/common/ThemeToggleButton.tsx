import {useRecoilState} from "recoil";
import {themeAtom} from "../states/recoil/themeAtom";
import {FiMoon, FiSun} from "react-icons/fi";
import {useLayoutEffect} from "react";

function ThemeToggleButton() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  /* 새로고침시에도 테마 유지하기 */
  useLayoutEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    }
  }, [setTheme]);

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
