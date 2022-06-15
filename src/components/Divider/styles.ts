import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 98%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.silver};
  margin: 4px;
`;
