import styled from "styled-components";

export const Container = styled.a`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  word-wrap: break-word;
  text-align: center;
  margin: 0 16px;
  cursor: pointer;
  @media (max-width: 900px){
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;