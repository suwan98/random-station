import {useState} from "react";
import Button from "../common/Button";
import catStation from "./../assets/img/catStation.jpg";
import StationResult from "./StationResult";
import StationTitle from "./StationTitle";
import getRandomIndex from "./../utils/getRandomIndex.js";

function Station({stationData}) {
  const [randomStation, setRandomStation] = useState(null);

  const handleClickRandomStation = () => {
    const randomIndex = getRandomIndex(stationData);
    setRandomStation(stationData[randomIndex]);
  };

  return (
    <>
      <StationTitle />
      <img src={catStation} alt="1호선 노선도" />
      <select name="station" id="station" className="py-8">
        {stationData.map((station: string, index: number) => (
          <option key={index} value={station}>
            {station}역
          </option>
        ))}
      </select>
      <StationResult station={randomStation} />
      <Button
        text="랜덤 지하철 역 생성하기"
        onClick={handleClickRandomStation}
      />
    </>
  );
}

export default Station;
