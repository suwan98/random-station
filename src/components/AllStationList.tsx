import {useEffect, useState} from "react";
import {TlineStation} from "../interface/TlineStation";

function AllStationList({stationData}) {
  const initalStatation: string[] = [];
  const [isClickedStation, setIsClickedStation] = useState(false);
  const [selectedStation, setSelectedStation] = useState(initalStatation);

  const handleSelectStation = (stationId: number) => () => {
    setSelectedStation((prev) => [
      ...prev.slice(-1),
      stationData[stationId - 1],
    ]);
    setIsClickedStation(true);
  };

  console.log(selectedStation);

  return (
    <>
      <ul className="grid grid-cols-8  grid-rows-4 gap-8 py-12">
        {stationData?.map((station: TlineStation) => {
          return (
            <li
              onClick={handleSelectStation(station.id)}
              className={`cursor-pointer rounded-md border text-center p-2 font-prentenDard hover:bg-slate-700 hover:text-slate-200 `}
              key={station.id}>
              {station.stationName}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AllStationList;
