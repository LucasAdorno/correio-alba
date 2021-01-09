import React, { useEffect, useState } from "react";
import FilterInBox from "../../components/FilterInBox";
import api from "../../services/api";
import { Container } from "./styles";

interface Props {
  match: {
    params: {
      query: string;
      startdate: string;
      enddate: string;
    };
  };
}

export interface ITotalData {
  partido: string;
  deputados: {
    deputado: string;
    gastos: {
      nota: string;
      categoria: string;
      cpf_cnpj: string;
      recebedor: string;
      date: string;
      valor: string;
    }[];
  }[];
}

const SearchPage: React.FC<Props> = ({ match }) => {
  const [totalData, setTotalData] = useState<ITotalData[]>();

  useEffect(() => {
    const { query, startdate, enddate } = match.params;
    api.post("fulldata", { query, startdate, enddate }).then((response) => {
      setTotalData(response.data);
      return console.log(response.data);
    });
  }, [match]);

  return (
    <>
      {totalData ? (
        <Container>
          <FilterInBox totalData={totalData} />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchPage;
