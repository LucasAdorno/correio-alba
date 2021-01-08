import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Main } from "./styles";
import SearchDiv from "../../components/SearchDiv";
import RedTitle from "../../components/RedTitle";
import FilterInBox from "../../components/FilterInBox";
import InfoContainer from "../../components/InfoContainer";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";
import PartiesChart from "../../components/PartiesChart";
import DataContainer from "../../components/DataContainer";

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

const Deppage: React.FC = () => {
  const [fullData, setFullData] = useState<IData>();

  useEffect(() => {
    api.get("/results").then((response) => {
      const { data } = response;

      setFullData(data);
    });
  }, []);

    return (
    <div>
      {/* <RedTitle title="PESQUISA DE DESPESAS"></RedTitle> */}
      <Container>
        <InfoContainer />

        {fullData ? (
          <Main>
            <RedTitle title="PRESTAÇÃO DE CONTAS - DEPUTADO"/>
            <CategoryChart fullData={fullData} /> <br></br><br></br>
          </Main>
        ) : (
          <></>
        )}

        <FilterInBox />
        <Main>
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
          <DataContainer />
        </Main>
          
      </Container>
    </div>
  );
};

export default Deppage;
