import Button from "../common/Button";
import line from "./../assets/img/stationImage.png";
import StationResult from "./StationResult";
import StationTitle from "./StationTitle";

function Station({stationData}) {
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
      <StationResult />
      <Button text="랜덤 텍스트 생성" />
    </>
  );
}

export default Station;
