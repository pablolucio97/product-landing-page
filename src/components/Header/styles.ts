import styled, { css, keyframes } from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ${({theme}) => theme.colors.primary};
  position: relative;

`;
