import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.hero};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1080px) {
    max-width: 92%;
    font-size: ${({ theme }) => theme.sizes.huge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
    text-align: center;
  }
`;
