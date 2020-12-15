import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 280px;
  padding: 40px 20px;

  margin: 20px auto;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 32px;

  /* background: var(--subcontainers-background); */

  h3 {
    margin-bottom: 10px;
    font-size: 20px;

  }
`;

export const CategoryLine = styled.div<{ percent: number }>`
  width: 100%;
  height: 30px;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: left;

  h1 {
    font-size: 14px;
  }

  h4 {
    background: lightgrey;
    width: 350px;
    padding: 10px 20px 10px 20px;
    font-size: 20px;
    margin-right: 0px;
    white-space: nowrap;
    
  }

  div {
    width: ${(props) => props.percent}%;
    position: relative;
    /* left: 380px; */
    height: 46px;
    border-radius: 0px;
    background-color: #00578A;
  }
`;
