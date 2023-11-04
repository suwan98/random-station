import {TlineStation} from "../@types/TlineStation";
import Button from "../common/Button";
import getRandomIndex from "../utils/getRandomIndex";
import {useRef, useState} from "react";
import StationDistanceResult from "./StationDistanceResult";
import RandomStationResult from "./RandomStationResult";
import StationItem from "./StationItem";

interface IStationDataProps {
  stationData: TlineStation[];
}

function AllStationList({stationData}: IStationDataProps) {
  const [selectedStation, setSelectedStation] = useState<number[]>([]);
  const [filterdStaion, setFilterdStaion] = useState<TlineStation[]>([]);
  const [randomStation, setRandomStation] = useState<TlineStation | null>(null);
  /* 버튼 클릭 애니메이션 구현 */
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
        <StationItem
          stationData={stationData}
          handleSelectStation={handleSelectStation}
          isBetweenSelectedStations={isBetweenSelectedStations}
        />
      </ul>
      <StationDistanceResult filterdStaion={filterdStaion} />
      <RandomStationResult randomStation={randomStation} />

      <Button
        buttonRef={buttonRef}
        text="랜덤 생성하기!"
        onClick={handleClickRandomStation}
      />
    </>
  );
}

export default AllStationList;
