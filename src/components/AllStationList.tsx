import {TlineStation} from "../interface/TlineStation";
import Button from "../common/Button";
import getRandomIndex from "../utils/getRandomIndex";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface IStationDataProps {
  stationData: TlineStation[];
}

function AllStationList({stationData}: IStationDataProps) {
  const [selectedStation, setSelectedStation] = useState<number[]>([]);
  const [filterdStaion, setFilterdStaion] = useState<TlineStation[]>([]);
  const [randomStation, setRandomStation] = useState<TlineStation | null>(null);

  /* 사용자가 2번 클릭 시 해당 역의 id값이 담긴 배열이 담기는 함수 */
  const handleSelectStation = (stationId: number) => () => {
    setSelectedStation((prev) => {
      if (prev.length === 2) {
        return [stationId];
      }
      if (prev.length === 1) {
        const start = Math.min(prev[0], stationId);
        const end = Math.max(prev[0], stationId);
        const newSelectedStations = Array(end - start + 1)
          .fill(start)
          .map((start, idx) => start + idx);
        setFilterdStaion(
          stationData.filter((station) =>
            newSelectedStations.includes(station.id)
          )
        );
        return newSelectedStations;
      }
      return [stationId];
    });
  };

  /*  주어진 역 ID가 사용자가 선택한 두 역 사이에 있는지 판단하는 함수 */
  const isBetweenSelectedStations = (id: number) => {
    return selectedStation.includes(id);
  };

  /* 버튼 클릭시 필터링한 역 기준으로 역 이름이 랜덤으로 생성되는 함수 */
  const handleClickRandomStation = () => {
    if (filterdStaion.length > 0) {
      const randomIndex = getRandomIndex(filterdStaion);
      setRandomStation(filterdStaion[randomIndex]);
    }
  };

  return (
    <>
      <ul className="grid grid-cols-4  gap-4 my-8  w-fit px-6 mobile:text-sm grid-flow-dense">
        <AnimatePresence>
          {stationData?.map(({id, stationName}: TlineStation, index) => (
            <motion.li
              key={id}
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 50}}
              transition={{delay: index * 0.01}}
              onClick={handleSelectStation(id)}
              className={`cursor-pointer rounded-md border text-center p-2 font-prentenDard hover:bg-slate-700 hover:text-slate-200 shadow-md place-content-center mobile:text-[12px] mobile:p-1  mobile:truncate ${
                isBetweenSelectedStations(id)
                  ? "bg-slate-700 text-slate-200"
                  : null
              }`}>
              {stationName}역
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <p className="font-prentenDard text-xl mobile:text-sm">
        {filterdStaion.length > 0 ? (
          <>
            {filterdStaion[0]?.stationName}역에서~
            {filterdStaion[filterdStaion.length - 1]?.stationName}역까지
            선택하셨습니다🧐
          </>
        ) : (
          "역을 선택해주세요."
        )}
      </p>
      <p className="pt-4 font-GongGothicMedium text-lg text-pink-600 mobile:text-sm">
        랜덤으로 생성된역은 ?
      </p>
      <p className="pt-4 font-GongGothicMedium text-lg mobile:text-sm">
        {randomStation?.stationName}역
      </p>
      <Button text="랜덤 생성하기!" onClick={handleClickRandomStation} />
    </>
  );
}

export default AllStationList;
