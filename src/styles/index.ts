import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;

  & .animated {
    background-color: ${({ theme }) => theme.colors.primary_light};
    position: fixed;
    z-index: 999;
    transition: all .3s ease;
  }

  & .normal {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all .3s ease;
  }

  & header {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

  .titleLight {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.white};
    width: 640px;
  }

  .subtitleLight {
    font-size: 18px;
    width: 480px;
    color: ${({ theme }) => theme.colors.white};
  }
  .titleDark {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.title};
    width: 640px;
  }

  .subtitleDark {
    font-size: 18px;
    width: 480px;
    color: ${({ theme }) => theme.colors.text};
  }

  .featureCard {
    border: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 8px;
    width: 320px;
    padding: 16px;
    margin: 8px 0;
  }

  .featureBadgeCard {
    border: 1px solid ${({ theme }) => theme.colors.silver};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    width: 320px;
    padding: 8px;
    height: 120px;
    margin: 8px 40px;
  }

  .cardTitle {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
  }

  .cardSubTitle {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const TopSection = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentContainer = styled.div`
  display: flex;
  margin: 120px auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 80px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.primary_light};
  padding: 12px;
  border-radius: 8px;
  & h1 {
    color: #77bf41;
    font-size: 40px;
  }
  & h3 {
    text-decoration: line-through;
  }

  & button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    margin-top: 12px;
  }
`;
