import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 280px;
  padding: 40px 20px;

  margin: 60px;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 10px;

  /* background: var(--subcontainers-background); */

  h3 {
    margin-bottom: 10px;
  }
`;

export const DeputyLine = styled.div<{ percent: number }>`
  width: 100%;
  
  display: flex;
  flex-direction: column;

  background: lightgrey;
  padding: 20px;

  gap: 10px;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 12px;
  }

  div {
    /* position: static; */
    /* left: 300px; */
    width: ${(props) => props.percent}%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    background-color: #00578a;
    color: #fff;
  }
`;
