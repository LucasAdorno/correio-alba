import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Main } from "./styles";

import SearchDiv from "../../components/SearchDiv";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";
import PartiesChart from "../../components/PartiesChart";

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
    <Container>
      <div className="redHeader">
        <h1>PRESTAÇÃO DE CONTAS</h1>
      </div>
      
      <SearchDiv />
      {fullData ? (
        <Main>
          <div className="redHeader">
            <h1>DESTAQUES</h1>
          </div>
          
          
          <CategoryChart fullData={fullData} />
          <DeputyChart fullData={fullData} />
          <PartiesChart fullData={fullData} />
        </Main>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Homepage;
