import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.normal};
    max-width: 92%;
    text-align: center;
  }
`;
