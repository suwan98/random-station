import {ReactNode} from "react";
import {useRecoilValue} from "recoil";
import {themeAtom} from "../states/recoil/themeAtom";

interface IContainer {
  children: ReactNode;
}

function Container({children}: IContainer) {
  const theme = useRecoilValue(themeAtom);

  const isRightThem = theme === "light";
  const lightThemeCSS = "bg-white text-black";
  const darkThemeCSS = "bg-black text-white";
  const themeCSS = isRightThem ? lightThemeCSS : darkThemeCSS;

  return (
    <>
      <div
        className={`flex my-12  w-full h-fit items-center justify-center flex-col p-12 mobile:p-6 ${themeCSS}`}>
        {children}
      </div>
    </>
  );
}

export default Container;
