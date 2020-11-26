import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #111;
  }
`;

export const Main = styled.div`
  width: 100%;

  margin: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const History = styled.div`
  width: 98%;
  padding: 10px;
  background: #CFCFCF;
  color: #333333;

  > h2 {
    padding: 20px;
  }
  
  .line-information {
    padding: 10px;
    
    display: flex;
    justify-content: space-between;
    background-color: #C4C4C4;
  }
`;