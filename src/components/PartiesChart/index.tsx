import React from "react";

import { Container } from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const PartiesChart: React.FC<Props> = ({ fullData }) => {
  return (
    <Container>
      <h3>Top 5 Partidos com mais gastos Média</h3>
    </Container>
  );
};

export default PartiesChart;
