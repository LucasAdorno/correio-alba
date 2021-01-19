import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  max-width: 1200px;

  display: flex;
  align-items: center;
`;

export const InputDiv = styled.div`
  width: 60%;
  height: 104px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 48px;

  #input-search {
    width: 100%;
    min-height: 36px;
    max-height: 140px;
  }

  #input-search #input-area {
    width: 100%;
    height: 36px;
    padding: 4px;

    display: flex;
    align-items: center;
    gap: 4px;

    border-radius: 0px;
    border: 2px solid #3d55ad;

    background-color: #efefef;
  }

  #sugestions {
    width: 100%;
    min-height: 36px;
    max-height: 140px;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
  }

  #sugestions a {
    width: 100%;
    height: 42px;
    margin: 0;
    padding: 12px;
    background: #e0e0e0;
    color: #3d55ad;
    z-index: 999;
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
    font-weight: 400;

    border-radius: 0px;
    border: 2px solid #3d55ad;

    background-color: #efefef;
  }
`;
