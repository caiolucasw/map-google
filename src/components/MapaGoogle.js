import { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import { Card } from "react-bootstrap";

const Map = ({ res, handleZoomChangedAndDrag }) => {
  const [lojaSelecionada, setLojaSelecionada] = useState(null);

  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{
        lat: -23.5557714, // O centro inicial do mapa
        lng: -46.6395571,
      }}
      onZoomChanged={handleZoomChangedAndDrag}
      onDragEnd={handleZoomChangedAndDrag}
    >
      {res && // Colocar os markers no mapa de acordo com os dados do endpoint
        res.msg === "success" &&
        res.data.map((item, index) => (
          <Marker
            key={index}
            position={{
              lat: parseFloat(item.lat),
              lng: parseFloat(item.lng),
            }}
            onClick={(e) => {
              setLojaSelecionada(item);
            }}
          >
            {lojaSelecionada && lojaSelecionada.name === item.name && (
              <InfoWindow // Aparecer uma janela quando clicar em algum marker no mapa
                onCloseClick={(e) => setLojaSelecionada(null)}
                position={{
                  lat: lojaSelecionada.lat,
                  lng: lojaSelecionada.lng,
                }}
              >
                <Card>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  <Card.Body>
                    <p>
                      <span className="fw-bold">Rua:</span> {item.street}
                    </p>
                    <p>
                      <span className="fw-bold">Cidade:</span> {item.city}
                    </p>
                    <p>
                      <span className="fw-bold">Estado:</span> {item.uf}
                    </p>
                  </Card.Body>
                </Card>
              </InfoWindow>
            )}
          </Marker>
        ))}
    </GoogleMap>
  );
};

const MapaGoogle = withScriptjs(withGoogleMap(Map)); // Inicialização do MapaGoogle de acordo com a documentação

export default MapaGoogle;
