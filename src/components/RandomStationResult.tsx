import {TlineStation} from "../@types/TlineStation";

interface IRandomStationResultProps {
  randomStation: TlineStation | null;
}

function RandomStationResult({randomStation}: IRandomStationResultProps) {
  return (
    <>
      <p className="pt-4 font-GongGothicMedium text-lg text-pink-600 mobile:text-sm">
        랜덤으로 생성된역은 ?
      </p>
      {!randomStation ? (
        <p className="pt-4 font-prentenDard text-lg">어떤 역을 골라볼까?</p>
      ) : (
        <p className="pt-4 font-GongGothicMedium text-lg mobile:text-sm">
          {randomStation?.stationName}역
        </p>
      )}
    </>
  );
}

export default RandomStationResult;
