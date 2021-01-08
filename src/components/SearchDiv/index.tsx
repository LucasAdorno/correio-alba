import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BiSearch } from "react-icons/bi";

import { Container, InputDiv, DateDiv } from "./styles";

const SearchDiv: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const functionStartDate = (date: Date) => {
    setStartDate(date);
  };

  const functionEndDate = (date: Date) => {
    setEndDate(date);
  };

  return (
    <Container>
      <InputDiv>
        <h4>PRESTAÇÃO DE CONTAS</h4>
        <div>
          <BiSearch />
          <input
            type="text"
            placeholder="Partido, Deputado, Categoria, Recebedor..."
          />
        </div>
        <Link to="/search">Pesquisar</Link>
      </InputDiv>
      <DateDiv>
        <div id="date-selector-title">
          <h4>DATA INICIAL</h4>
          <h4>DATA FINAL</h4>
        </div>
        
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
