import React, { MouseEvent } from "react";

import {
  Container,
  PartyContainer,
  HeaderPartyContainer,
  MainPartyContainer,
  PartyDeputyLine,
} from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const PartiesChart: React.FC<Props> = ({ fullData }) => {
  const expandContainer = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    event.currentTarget.parentElement?.classList.toggle("expand-party");
  };

  return (
    <Container>
      <h3>Top 5 Partidos com mais gastos (Média)</h3>
      {fullData.topFiveParties.map((item) => (
        <PartyContainer>
          <HeaderPartyContainer onClick={expandContainer}>
            <h4>{item.name}</h4>
            <div>{item.formatedMidValue}</div>
          </HeaderPartyContainer>
          <MainPartyContainer>
            {item.partDeputies.map((deputy) => (
              <PartyDeputyLine>
                <h5>{deputy.name}</h5>
                <h5>{deputy.formatedFinalValue}</h5>
              </PartyDeputyLine>
            ))}
          </MainPartyContainer>
        </PartyContainer>
      ))}
    </Container>
  );
};

export default PartiesChart;
