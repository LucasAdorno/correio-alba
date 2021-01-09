import React, { useEffect, useState } from "react";
import { ITotalData } from "../../pages/SearchPage";
import {
  Container,
  SelectType,
  FilterTitle,
  FilterOption,
  FilterList,
} from "./styles";

interface Props {
  totalData: ITotalData[];
}

const FilterInBox: React.FC<Props> = ({ totalData }) => {
  const [groupSelected, setGroupSelected] = useState(true);
  const [validDeputies, setValidDeputies] = useState<string[]>();
  const [validParties, setValidParties] = useState<string[]>();

  useEffect(() => {
    const tempDeputies: string[] = [];
    const tempParties: string[] = [];

    totalData.map(({ deputados, partido }) => {
      tempParties.push(partido);
      return deputados.map(({ deputado }) => tempDeputies.push(deputado));
    });

    setValidDeputies(tempDeputies);
    setValidParties(tempParties);
  }, [totalData]);

  return (
    <Container>
      <SelectType>
        <FilterTitle>Agrupar por</FilterTitle>
        <FilterOption>
          <button onClick={() => setGroupSelected(!groupSelected)}>
            <div className={groupSelected ? "group-selected" : ""}></div>
          </button>
          <h4>Deputados</h4>
        </FilterOption>
        <FilterOption>
          <button onClick={() => setGroupSelected(!groupSelected)}>
            <div className={groupSelected ? "" : "group-selected"}></div>
          </button>
          <h4>Partidos</h4>
        </FilterOption>
      </SelectType>

      <FilterList>
        {validDeputies ? (
          validDeputies.map((deputado) => <p key={deputado}>{deputado}</p>)
        ) : (
          <></>
        )}
      </FilterList>

      <FilterList>
        {validParties ? (
          validParties.map((deputado) => <p key={deputado}>{deputado}</p>)
        ) : (
          <></>
        )}
      </FilterList>
    </Container>
  );
};

export default FilterInBox;
