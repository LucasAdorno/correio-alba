import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 18px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: var(--primary-color);

  h1 {
    padding-left: 20px;

    font-weight: 500;
    font-size: 26px;

    color: #e0e0e0;
  }

  div {
    width: 100%;
    height: 20px;

    background: var(--secondary-color);
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 32px;
    }
  }
`;
