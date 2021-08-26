import { useState, useEffect } from "react";
import MapaGoogle from "./components/MapaGoogle";
import Lojas from "./components/Lojas";
import { fetchData } from "./requisicao";

function App() {
  const [coord, setCoord] = useState({});

  const [res, setRes] = useState({}); // Estado para armazenar a resposta do endpoint

  function handleZoomChangedAndDrag() {
    // Evento para coletar a latitude e longitudade
    let bounds = this.getBounds(); // this se refere ao objeto map
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    setCoord({
      ne_lat: ne.lat(),
      ne_lng: ne.lng(),
      sw_lat: sw.lat(),
      sw_lng: sw.lng(),
    });
  }

  useEffect(() => {
    (async () => {
      setRes(await fetchData(coord));
    })();
  }, [coord]);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100 mb-4">
        <MapaGoogle
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDpgQt8Jry7leheKRsIRj_KDD_Jv1ma3KM`}
          loadingElement={<div style={{ height: "100%" }}></div>}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          res={res}
          coord={coord}
          handleZoomChangedAndDrag={handleZoomChangedAndDrag}
        />
      </div>

      <Lojas res={res} />
    </div>
  );
}

export default App;
