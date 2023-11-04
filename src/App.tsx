import {useState} from "react";
import Station from "./components/Station";
import Container from "./layout/Container";
import {line1Stations} from "./api/stationData";

function App() {
  const [stationData] = useState(line1Stations);

  return (
    <>
      <Container>
        <Station stationData={stationData} />
      </Container>
    </>
  );
}

export default App;
