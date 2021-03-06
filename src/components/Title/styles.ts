import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.huge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.huge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
    max-width: 92%;
    text-align: center;
  }
`;
