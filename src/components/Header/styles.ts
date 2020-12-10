import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 112px;
  padding: 28px 32px;
  

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #00578A;

  h1 {
    padding-left: 20px;
    font-size: 48px;
    font-weight: 700;

    color: #FFFFFF;
  }

  div {
    width: 100%;
    height: 20px;

    background: var(--secondary-color);
  }
`;
