import {useRecoilState} from "recoil";
import {themeAtom} from "../states/recoil/themeAtom";
import Button from "./Button";

function ThemeToggleButton() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Button text="테마 변환" onClick={handleToggleTheme} />
    </>
  );
}

export default ThemeToggleButton;
