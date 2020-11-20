import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 160px;
  padding: 18px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--primary-color);

  h1 {
    padding-left: 20px;

    font-weight: 500;

    color: #e0e0e0;
  }

  div {
    width: 100%;
    height: 20px;

    background: var(--secondary-color);
  }
`;
