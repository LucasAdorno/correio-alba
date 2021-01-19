import React, { useEffect, useState } from "react";
import FilterInBox from "../../components/FilterInBox";
import SearchDiv from "../../components/SearchDiv";
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
  const [groupSelected, setGroupSelected] = useState(true);

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
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <SearchDiv />
          </div>
          <div style={{ width: "100%", display: "flex", gap: "8px" }}>
            <FilterInBox
              groupSelected={groupSelected}
              setGroupSelected={() => setGroupSelected(!groupSelected)}
              totalData={totalData}
            />
            {/* <ExpandInfo>{}</ExpandInfo> */}
          </div>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchPage;
