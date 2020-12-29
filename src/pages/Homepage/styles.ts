import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* gap: 50px; */

  /* background: #f3f2f2; */

  .redHeader {
    width: 100vw;
    padding: 10px 10px 10px 40px;
    margin-bottom: 10px;
    background-color: #ed1a3b;

    h1 {
      color: white;
      position: relative;
      left: 10%;

      

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
