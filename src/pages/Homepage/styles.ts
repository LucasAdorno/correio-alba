import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f3f2f2;

  .redHeader {
    width: 100%;
    min-height: 64px;
    padding: 10px 10px 10px 40px;
    margin-bottom: 10px;
    background-color: #ed1a3b;

    h1 {
      color: white;

      @media (max-width: 767px) {
        font-size: 24px;
      }
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
