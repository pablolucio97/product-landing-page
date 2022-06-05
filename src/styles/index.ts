import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;

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

  .cardTitle {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
  }

  .cardSubTitle {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
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

  & button{
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    margin-top: 12px;
  }
`;

export const FirstFeatureSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SecondFeatureSection = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary_dark};
`;
