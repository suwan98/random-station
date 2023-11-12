import {useRecoilValue} from "recoil";
import {themeAtom} from "../states/recoil/themeAtom";

function StationTitle() {
  const theme = useRecoilValue(themeAtom);
  const darkTtitle = theme === "dark" ? "text-white" : "text-[#0051a2]";

  return (
    <>
      <h1
        className={`font-GiantsInline text-4xl ${darkTtitle} pb-14 mobile:pb-7 mobile:text-2xl text-center`}>
        랜덤 지하철 노선 생성기 (1호선)
      </h1>
    </>
  );
}

export default StationTitle;
