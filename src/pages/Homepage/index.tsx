import React, { useEffect, useState } from "react";
import SearchDiv from "../../components/SearchDiv";

import { Container, Main, History } from "./styles";

import api from "../../services/api";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";
import TotalChart from "../../components/TotalChart";

export interface IParties {
  name: string;
  finalValue: number;
  formatedFinalValue: string;
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
      <History>
      <h2>Prestações de contas no mês - Este mês</h2>
        <TotalChart />
        <div className="line-information">
          <p>Total de gastos neste mês: </p>
          <a>R$ 240.000.545,00</a>
        </div>
        <div className="line-information">
          <p>Maior gasto único: </p>
          <a>R$ 24.000,00</a>
        </div>
        <div className="line-information">
          <p>Deputado com maior recebimento: </p>
          <a className="highlight-text">Francisco de Paula</a>
        </div>
        <div className="line-information">
          <p>Empresa com maior recebimento: </p>
          <a className="highlight-text">Tal serviços S.A</a>
        </div>
      </History>
    </Container>
  );
};

export default Homepage;
