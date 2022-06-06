import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 720px) {
    display: none;
  }
`;