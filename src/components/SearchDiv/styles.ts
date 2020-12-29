import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin-top: 24px;
  display: flex;
  padding: 20px;  /* align-items: center; */
`;

export const InputDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 15px;
  /* text-align: left; */

  

  div {
    width: 100%;
    height: 50px;
    padding: 4px;
    
    display: flex;
    align-items: center;
    gap: 4px;

    border-radius: 0px;
    border: 2px solid #3d55ad;

    font-size:  18px;

    background-color: #efefef;
  }

  h4{
    margin-left: 20px;
    font-size: 20px;
  }

  div input {
    width: 100%;
    height: 32px;

    outline: none;
    border: none;
    font-size: 18px;

    background-color: #efefef;
  }

  a {
    width: 140px;
    height: 50px;
    padding: 4px;
    margin-top: 8px;

    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;

    border-radius: 0px;

    background: var(--primary-color);
    color: #fafafa;
  }
`;

export const DateDiv = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  h4{
    font-size: 20px;
  }

  #date-selector-title{
    display: flex;
    gap: 70px;
  }

  #date-selector-div {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 50%;
  }

  .data-styled {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-weight: 400;
    font-size: 18px;

    border-radius: 0px;
    border: 2px solid #3d55ad;

    background-color: #efefef;
  }
`;
