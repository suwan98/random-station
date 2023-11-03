import {useState} from "react";
import Button from "../common/Button";
import catStation from "./../assets/img/catStation.jpg";
import StationResult from "./StationResult";
import StationTitle from "./StationTitle";
import getRandomIndex from "./../utils/getRandomIndex.js";
import {TlineStation} from "../interface/TlineStation.js";
import AllStationList from "./AllStationList.js";

interface StationProps {
  stationData: TlineStation[];
}

function Station({stationData}: StationProps) {
  const [station, setStation] = useState<TlineStation | null>(null);

  const handleClickRandomStation = () => {
    const randomIndex = getRandomIndex(stationData);
    setStation(stationData[randomIndex]);
  };

  return (
    <>
      <StationTitle />
      <img src={catStation} alt="1호선 노선도" />
      <AllStationList stationData={stationData} />
      <StationResult station={station} />
      <Button
        text="랜덤 지하철 역 생성하기"
        onClick={handleClickRandomStation}
      />
    </>
  );
}

export default Station;
