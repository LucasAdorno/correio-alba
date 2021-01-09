import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  min-height: 200px;
  margin-left: 8px;

  background: #dddddd;

  border: 2px solid #1113;
  border-radius: 12px;
`;

export const SelectType = styled.div`
  width: 100%;
  height: 160px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 12px;

  border-bottom: 1px solid #1116;
`;

export const FilterTitle = styled.h3`
  width: 100%;

  color: #1d426a;
`;

export const FilterOption = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;
  color: #1d426a;

  button {
    width: 26px;
    height: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 2px solid #1116;

    div {
      width: 14px;
      height: 14px;

      border-radius: 50%;

      background: none;
    }

    .group-selected {
      background: #2226;
    }
  }
`;

export const FilterList = styled.div`
  width: 100%;
  padding: 0 8px;

  display: flex;
  flex-direction: column;
`;
