import React from "react";

import { Container } from "./styles";

interface props{
  title: string;
}

const RedTitle: React.FC<props> = (props) => {
  return (
    <Container> 
      <h1>{props.title}</h1>
    </Container>
      
  );
};

export default RedTitle;
