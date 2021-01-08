import React, { useEffect, useState } from "react";

import { Container, Main } from "./styles";
import SearchDiv from "../../components/SearchDiv";
import RedTitle from "../../components/RedTitle";
import FilterInBox from "../../components/FilterInBox";
import DataContainer from "../../components/DataContainer";


const Searchpage: React.FC = () => {
    return (
    <div>
      {/* <RedTitle title="PESQUISA DE DESPESAS"></RedTitle> */}
      <Container>
        <SearchDiv />
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

export default Searchpage;
