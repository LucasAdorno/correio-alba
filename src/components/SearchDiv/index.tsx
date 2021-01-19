import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BiSearch } from "react-icons/bi";
import api from "../../services/api";

import { Container, InputDiv, DateDiv } from "./styles";

const SearchDiv: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [infoSearch, setInfoSearch] = useState<string>();
  const [parties, setParties] = useState<string[]>();
  const [deputies, setDeputies] = useState<string[]>();

  const functionStartDate = (date: Date) => {
    setStartDate(date);
  };

  const functionEndDate = (date: Date) => {
    setEndDate(date);
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.currentTarget.value;
    setParties(undefined);
    setDeputies(undefined);
    if (query !== "") {
      api
        .post("inputsearch", { query })
        .then((response) => {
          setParties(response.data.parties);
          setDeputies(response.data.allDeputies);
          console.log(response.data.parties);
        })
        .catch((err) => console.log(err));
    }
    setInfoSearch(e.currentTarget.value);
  };

  return (
    <Container>
      <InputDiv>
        <h4>Prestação de contas</h4>
        <div id="input-search">
          <div id="input-area">
            <BiSearch />
            <input
              type="text"
              placeholder="Partido, Deputado, Categoria, Recebedor..."
              onChange={handleInputSearch}
              value={infoSearch}
            />
          </div>
          {parties && deputies ? (
            <div id="sugestions">
              {parties.map((item) => (
                <Link
                  onClick={() => {
                    setDeputies(undefined);
                    setParties(undefined);
                  }}
                  key={item}
                  to={`/search/${item}/${startDate}/${endDate}`}
                >
                  {item}
                </Link>
              ))}
              {deputies.map((item) => (
                <Link
                  onClick={() => {
                    setDeputies(undefined);
                    setParties(undefined);
                  }}
                  key={item}
                  to={`/search/${item}/${startDate}/${endDate}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <Link to={`/search/${infoSearch}/${startDate}/${endDate}`}>
          Pesquisar
        </Link>
      </InputDiv>
      <DateDiv>
        <h4>Período</h4>
        <div id="date-selector-div">
          <DatePicker
            className="data-styled"
            selected={startDate}
            onChange={functionStartDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
          />
          <DatePicker
            className="data-styled"
            selected={endDate}
            onChange={functionEndDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </DateDiv>
    </Container>
  );
};

export default SearchDiv;
