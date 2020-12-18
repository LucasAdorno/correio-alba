import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  margin: 5px;

  .initial-bar {
    height: 60px;
    border-radius: 6px;
    background: #D3D3D3;
    overflow: hidden;
    transition: all 0.4s;
    
  }

  .active {
    height: 300px;
  } 

  .initial-header-bar {
    width: 100%;
    height: 60px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 30px;
    background: #C4C4C4;
  }

  .initial-header-bar h2 {
    font-weight: 500;
  }

  .initial-header-bar .red-total-bar {
    width: 220px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: #C12727;
    color: #fafafa;
  }

  .initial-content { 
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 14px;
  }

  .initial-content-line {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link-page {
    width: 100%;
    margin-top: 30px;
    text-align: right;
  }
`;
