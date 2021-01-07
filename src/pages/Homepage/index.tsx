import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Main } from "./styles";

import SearchDiv from "../../components/SearchDiv";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";
import PartiesChart from "../../components/PartiesChart";
import RedTitle from "../../components/RedTitle";

export interface IParties {
  name: string;
  finalValue: number;
  formatedFinalValue: string;
  midValue: number;
  formatedMidValue: string;
  partDeputies: IDeputies[];
}

export interface IDeputies {
  name: string;
  values: string[];
  finalValue: number;
  formatedFinalValue: string;
  deputyCategory: string[];
}

export interface IData {
  totalDeputies: IDeputies[];
  totalParties: IParties[];
  totalCategories: IParties[];
  topFiveDeputies: IDeputies[];
  topFiveParties: IParties[];
  topFiveCategories: IParties[];
}

const Homepage: React.FC = () => {
  const [fullData, setFullData] = useState<IData>();

  useEffect(() => {
    api.get("/results").then((response) => {
      const { data } = response;

      setFullData(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <RedTitle title="PRESTAÇÃO DE CONTAS"/>
        <SearchDiv />

        {fullData ? (
          <Main>
            <RedTitle title="DESTAQUES"/>
            <CategoryChart fullData={fullData} /> <br></br><br></br>
            <DeputyChart fullData={fullData} />
            <PartiesChart fullData={fullData} />
          </Main>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default Homepage;
