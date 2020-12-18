import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Main } from "./styles";

import InfoContainer from "../../components/InfoContainer";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";
import PartiesChart from "../../components/PartiesChart";
import DataContainer from "../../components/DataContainer";
// import WasteChart from "../../components/WasteChart";

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

const DeputyPage: React.FC = () => {
  const [fullData, setFullData] = useState<IData>();

  useEffect(() => {
    api.get("/results").then((response) => {
      const { data } = response;

      setFullData(data);
    });
  }, []);

  return (
    <Container>
      <br></br><br></br>
      <InfoContainer />
      <br></br><br></br>

      <div className="redHeader">
        <h1>PRESTAÇÃO DE CONTAS</h1>
      </div>

      <br></br>

      {/* <WasteChart /> */}
      
      
      {fullData ? (
        <Main>
          <CategoryChart fullData={fullData} />
          <br></br><br></br><br></br><br></br>
          {/* <DeputyChart fullData={fullData} /> */}
          {/* <PartiesChart fullData={fullData} /> */}
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
        </Main>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default DeputyPage;
