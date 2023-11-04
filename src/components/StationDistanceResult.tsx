import {TlineStation} from "../@types/TlineStation";

interface IStationDistanceResultProps {
  filterdStaion: TlineStation[];
}

function StationDistanceResult({filterdStaion}: IStationDistanceResultProps) {
  return (
    <>
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
    </>
  );
}

export default StationDistanceResult;
