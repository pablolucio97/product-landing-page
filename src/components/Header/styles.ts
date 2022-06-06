import styled, { css, keyframes } from "styled-components";

interface HeaderProps {
  showAnimation?: boolean;
}

export const Animation = keyframes`
  0%{background: red};
  100%{background:cyan};
`;

export const Container = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme, showAnimation }) => showAnimation ? theme.colors.primary : theme.colors.alert};
  position: relative;
  animation: ${({showAnimation}) => showAnimation && Animation} 3s ease;
`;
