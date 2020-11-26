import React, { useEffect, useState } from "react";
import SearchDiv from "../../components/SearchDiv";

import { Container, Main } from "./styles";

import api from "../../services/api";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";

export interface IParties {
  name: string;
  finalValue: number;
  formatedFinalValue: string;
  midValue: number;
  formatedMidValue: string;
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
    <Container>
      <h1>Pesquise as despesas dos deputados</h1>
      <SearchDiv />
      {fullData ? (
        <Main>
          <h1>Veja os destaques</h1>
          <CategoryChart fullData={fullData} />
          <DeputyChart fullData={fullData} />
        </Main>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Homepage;
