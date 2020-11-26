import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  color: #333333;


  .line-information {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p, a {
    padding-left: 10px;
    font-size: 12px;
    font-weight: 500;
  }

  .active {
    font-weight: 900;
    color: #60BC04;
  }
  
  .incress-weight {
    font-weight: 900;
  }

  @media (min-width: 360px) {
    .adress {
      font-size: 10.6px;
    }
  }

  @media (min-width: 360px) {
        padding: 10px 10px 0 0;
    }

`;