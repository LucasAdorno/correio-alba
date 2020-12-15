import React from "react";

import { Container, DeputyLine } from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const DeputyChart: React.FC<Props> = ({ fullData }) => {
  return (
    <Container>
      <h3>DEPUTADOS COM MAIS GASTOS</h3>
      {fullData.topFiveDeputies.map((deputy, index) => (
        <DeputyLine
          percent={
            (deputy.finalValue / fullData.topFiveDeputies[0].finalValue) * 70
          }
        >
          <h4>{index + 1 + "º " + deputy.name}</h4>
          <div>{deputy.formatedFinalValue}</div>
        </DeputyLine>
      ))}
    </Container>
  );
};

export default DeputyChart;
