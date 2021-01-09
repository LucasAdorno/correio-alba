import React from "react";
import { Container } from "./styles";

const InfoContainer: React.FC = () => {
  return (
    <Container>
      <div className="line-information">
        <p>Total de gastos neste mês: </p>
        <p>R$ 240.000.545,00</p>
      </div>
      <div className="line-information">
        <p>Maior gasto único: </p>
        <p>R$ 24.000,00</p>
      </div>
      <div className="line-information">
        <p>Deputado com maior recebimento: </p>
        <p className="highlight-text">Francisco de Paula</p>
      </div>
      <div className="line-information">
        <p>Empresa com maior recebimento: </p>
        <p className="highlight-text">Tal serviços S.A</p>
      </div>
    </Container>
  );
};

export default InfoContainer;
