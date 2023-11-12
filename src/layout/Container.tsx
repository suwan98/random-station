import {ReactNode} from "react";
import {useRecoilValue} from "recoil";
import {themeAtom} from "../states/recoil/themeAtom";

interface IContainer {
  children: ReactNode;
}

function Container({children}: IContainer) {
  const theme = useRecoilValue(themeAtom);

  const isRightThem = theme === "light";
  const lightThemeCSS = "bg-white text-[##1c1e21]";
  const darkThemeCSS = "bg-[#18191a] text-[#f5f6f7]";
  const themeCSS = isRightThem ? lightThemeCSS : darkThemeCSS;

  return (
    <>
      <div
        className={`flex py-12  w-full h-fit items-center justify-center flex-col p-12 mobile:p-6 ${themeCSS}`}>
        {children}
      </div>
    </>
  );
}

export default Container;
