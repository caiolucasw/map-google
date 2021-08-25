import React from "react";
import Loja from "./Loja";

function Lojas({ res }) {
  return (
    <div className="w-100  mb-3 d-flex flex-column align-items-center">
      <h2 className="text-lead">Lojas na região</h2>
      <p className="text-lead text-muted">
        (Para encontrar lojas arraste com o mouse dentro do mapa ou use o zoom)
      </p>
      {res.code === 200 &&
        res.msg === "success" &&
        res.data.map((loja, index) => <Loja key={index} loja={loja} />)}
    </div>
  );
}

export default Lojas;
