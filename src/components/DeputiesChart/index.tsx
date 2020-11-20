import React from "react";

import { Container, DeputyLine } from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const DeputyChart: React.FC<Props> = ({ fullData }) => {
  return (
    <Container>
      <h3>Deputados com mais gastos</h3>
      {fullData.topFiveDeputies.map((deputy) => (
        <DeputyLine
          percent={
            (deputy.finalValue / fullData.topFiveDeputies[0].finalValue) * 70
          }
        >
          <h4>{deputy.name}</h4>
          <div>{deputy.formatedFinalValue}</div>
        </DeputyLine>
      ))}
    </Container>
  );
};

export default DeputyChart;
