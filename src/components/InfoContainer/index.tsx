/* eslint-disable */
import React from "react";
import { Container } from "./styles";

const InfoContainer: React.FC = () => {
  return (
    <Container>
      <div className="line-information">
        <p>Total de gastos neste mês: </p>
        <a href="#">R$ 240.000.545,00</a>
      </div>
      <div className="line-information">
        <p>Maior gasto único: </p>
        <a href="#">R$ 24.000,00</a>
      </div>
      <div className="line-information">
        <p>Deputado com maior recebimento: </p>
        <a href="#" className="highlight-text">
          Francisco de Paula
        </a>
      </div>
      <div className="line-information">
        <p>Empresa com maior recebimento: </p>
        <a href="#" className="highlight-text">
          Tal serviços S.A
        </a>
      </div>
    </Container>
  );
};

export default InfoContainer;
