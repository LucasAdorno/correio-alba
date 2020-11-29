import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const InputDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 900px) {
    width: 60%;

    flex-direction: column;
  }

  div {
    width: 100%;
    height: 36px;
    padding: 4px;

    display: flex;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 2px solid #3d55ad;

    background-color: #efefef;
  }

  div input {
    width: 100%;
    height: 32px;

    outline: none;
    border: none;

    background-color: #efefef;
  }

  a {
    width: 100px;
    height: 40px;
    padding: 4px;
    margin-top: 8px;

    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    background: var(--primary-color);
    color: #fafafa;
  }
`;

export const DateDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 900px) {
    width: 40%;
    flex-direction: column;
  }

  #date-selector-div {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 50%;
  }

  .data-styled {
    width: 100%;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-weight: 600;

    border-radius: 8px;
    border: 2px solid #3d55ad;

    background-color: #efefef;
  }
`;
