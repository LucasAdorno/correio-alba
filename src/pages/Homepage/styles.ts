import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .redHeader {
    width: 100%;
    height: 64px;
    padding: 10px 10px 10px 40px;
    background-color: #ED1A3B;

    h1 {
      color: white;
      /* border: 1px; */
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
