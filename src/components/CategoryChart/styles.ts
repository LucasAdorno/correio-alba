import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 280px;
  padding: 40px 20px;

  margin: 20px auto;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background: var(--subcontainers-background);

  h3 {
    margin-bottom: 10px;
  }
`;

export const CategoryLine = styled.div<{ percent: number }>`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 14px;
  }

  div {
    width: ${(props) => props.percent}%;
    height: 30px;
    background-color: #ee3333;
  }
`;
