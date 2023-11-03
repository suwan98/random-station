import {TlineStation} from "../interface/TlineStation";

interface StationResultProps {
  station: TlineStation;
}

function StationResult({station}: StationResultProps) {
  return (
    <>
      <div className="p-12 font-GongGothicMedium text-xl">
        {station ? `${station.stationName}역` : "역을 선택해주세요"}
      </div>
    </>
  );
}

export default StationResult;
