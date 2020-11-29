import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 26px;
    color: #111;
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 32px;
    }
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
