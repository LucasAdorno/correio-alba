import React from "react";
import { Container } from "./styles";

const CnpjInf: React.FC = () => {
  return (
    <Container>
      <div className="line-information">
        <p>SITUAÇÃO CADASTRAL:</p>
        <p className="active">
          ATIVA
        </p>
      </div>
      <div className="line-information">
        <p>Principal atividade econômica:</p>
        <p className="incress-weight">
          Suporte tal
        </p>
      </div>
      <div className="line-information">
        <p>Endereço:</p>
        <p className="adress">
          Rua Fulano de tal, 000, São Paulo - SP, 40000-000
        </p>
      </div>
    </Container>
  );
};

export default CnpjInf;
