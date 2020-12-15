import React from "react";

import { Container, CategoryLine } from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const CategoryChart: React.FC<Props> = ({ fullData }) => {
  return (
    <Container>
      <h3>CATEGORIAS COM MAIS GASTOS -</h3>
      {fullData.topFiveCategories.map((category) => (
        <CategoryLine
          percent={
            (category.finalValue / fullData.topFiveCategories[0].finalValue) *
            70
          }
        >
          <h4>{category.name}</h4>
          <div />
        </CategoryLine>
      ))}
    </Container>
  );
};

export default CategoryChart;
