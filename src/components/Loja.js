import React from "react";
import { Card } from "react-bootstrap";

function Loja({ loja }) {
  const cardImgEstilo = {
    height: "40%",
    width: "60%",
    display: "block",
    margin: "5px auto",
  };

  return (
    <Card className="my-3 w-50" style={{ height: "350px" }}>
      <Card.Header className="bg-dark text-white">
        <span className="fw-bold">{loja.name}</span>
      </Card.Header>
      {loja.image_url ? (
        <Card.Img
          variant="top"
          style={cardImgEstilo}
          src={loja.image_url}
          fluid
        />
      ) : (
        <div
          className="bg-light text-center text-muted h6"
          style={cardImgEstilo}
        >
          Imagem Indisponível
        </div>
      )}
      <Card.Body className="mt-2">
        <p>
          <span className="fw-bold">Rua:</span> {loja.street}
        </p>
        <p>
          <span className="fw-bold">Cidade:</span> {loja.city}
        </p>
        <p>
          <span className="fw-bold">Estado:</span> {loja.uf}
        </p>
      </Card.Body>
    </Card>
  );
}

export default Loja;
