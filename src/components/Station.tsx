import {useState} from "react";
import Button from "../common/Button";
import line from "./../assets/img/stationImage.png";
import StationResult from "./StationResult";
import StationTitle from "./StationTitle";
import getRandomIndex from "./../utils/getRandomIndex";

function Station({stationData}) {
  const [randomStation, setRandomStation] = useState(null);

  const handleClickRandomStation = () => {
    const randomIndex = getRandomIndex(stationData);
    setRandomStation(stationData[randomIndex]);
  };

  return (
    <>
      <StationTitle />
      <img src={line} alt="1호선 노선도" />
      <select name="station" id="station" className="py-8">
        {stationData.map((station, index) => (
          <option key={index} value={station}>
            {station}
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
