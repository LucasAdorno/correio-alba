import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, Main } from "./styles";

import SearchDiv from "../../components/SearchDiv";
import CategoryChart from "../../components/CategoryChart";
import DeputyChart from "../../components/DeputiesChart";
import PartiesChart from "../../components/PartiesChart";
import RedTitle from "../../components/RedTitle";

const Searchpage: React.FC = () => {
    return (
    <div>
      {/* <RedTitle title="PESQUISA DE DESPESAS"></RedTitle> */}
      <Container>
        
        <SearchDiv />
      </Container>
    </div>
  );
};

export default Searchpage;
