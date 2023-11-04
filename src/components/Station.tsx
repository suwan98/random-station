import catStation from "./../assets/img/catStation.jpg";
import StationTitle from "./StationTitle";
import {TlineStation} from "../@types/TlineStation.js";
import AllStationList from "./AllStationList.js";

interface StationProps {
  stationData: TlineStation[];
}

function Station({stationData}: StationProps) {
  return (
    <>
      <StationTitle />
      <img src={catStation} alt="1호선 노선도" />
      <AllStationList stationData={stationData} />
    </>
  );
}

export default Station;
