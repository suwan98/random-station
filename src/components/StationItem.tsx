import {motion, AnimatePresence} from "framer-motion";
import {TlineStation} from "../@types/TlineStation";

interface IStaitionItemProps {
  stationData: TlineStation[];
  handleSelectStation: (stationId: number) => () => void;
  isBetweenSelectedStations: (id: number) => boolean;
}

function StationItem({
  stationData,
  handleSelectStation,
  isBetweenSelectedStations,
}: IStaitionItemProps) {
  return (
    <>
      <AnimatePresence>
        {stationData?.map(({id, stationName}: TlineStation, index) => (
          <motion.li
            key={id}
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 50}}
            transition={{delay: index * 0.01}}
            onClick={handleSelectStation(id)}
            className={`cursor-pointer rounded-md border text-center p-2 font-prentenDard hover:bg-slate-700 hover:text-slate-200 shadow-md place-content-center mobile:text-[12px] mobile:p-1  mobile:truncate ${
              isBetweenSelectedStations(id)
                ? "bg-slate-700 text-slate-200"
                : null
            }`}>
            {stationName}역
          </motion.li>
        ))}
      </AnimatePresence>
    </>
  );
}

export default StationItem;
