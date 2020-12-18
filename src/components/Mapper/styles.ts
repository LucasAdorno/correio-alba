import styled from 'styled-components';

export const Container = styled.div`

  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .map {
    width: 100%;
    height: 400px;
    /* min-height: 300px; */
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 900;
  }

  @media (min-width: 980px) {
    height: 500px;
  }
`;
