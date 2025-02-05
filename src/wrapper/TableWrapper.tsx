import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  & * {
    word-break: break-all;
  }
  & td:nth-of-type(1) {
    width: 5%;
    min-width: 25px;
    font-weight: bold;
  }
`;
