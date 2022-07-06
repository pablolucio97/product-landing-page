import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 720px) {
    display: none;
  }
`;