import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;

  & .animatedHeader {
    background-color: ${({ theme }) => theme.colors.primary_light};
    position: fixed;
    z-index: 999;
    transition: all 0.3s ease;
  }

  & .normalHeader {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
  }
  & .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }

  & .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
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
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.normal}
    }
  }

  .heroTitleLight {
    color: ${({ theme }) => theme.colors.white};
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
    background: transparent;
    border-radius: 8px;
    width: 280px;
    padding: 8px;
    margin: 8px 40px;
    @media (max-width: 1080px) {
      height: 160px;
      width: 200px;
      margin: 8px;
    }
    @media (max-width: 720px) {
      width: 96%;
      height: 80px;
      padding: 24px;
    }

    & span{
      color: ${({ theme }) => theme.colors.element_base}
    }
    & h3{
      color: ${({ theme }) => theme.colors.white}
    }
  }

  .cardTitle {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.sizes.medium};
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.small};
    }
  }

  .cardSubTitle {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.sizes.normal};
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.xsmall};
    }
  }

  .icon{
    color: ${({ theme }) => theme.colors.secondary};
    margin: 4px;
  }
`;

export const FirstSection = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1080px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;
export const SecondSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 720px) {
    height: 50vh;
  }
`;
export const ThirdSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  margin: 0 auto;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 720px) {
    padding-bottom: 40px;
  }
`;

export const FourthSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 720px) {
    padding-bottom: 40px;
  }
`;

export const FifthSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 0;
  height: 40vh;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 720px) {
    padding-bottom: 40px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
  margin: 120px auto;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin: 120px auto;
    align-items: center;
    & img {
      width: 64%;
      margin-top: 40px;
    }
  }
`;
export const FirstSectionLineContainer = styled.div`
  display: flex;
  margin: 40px auto;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin: 120px auto;
    align-items: center;
  }
`;
export const SecondSectionLineContainer = styled.div`
  display: flex;
  margin: 120px auto;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin: 120px auto;
    align-items: center;
  }

  & h3{
    margin: 16px 0;
    
  }
`;
export const ThirdSectionLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;
export const FourthSectionLineContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FifthSectionLineContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
  & h1 {
    color: ${({ theme }) => theme.colors.white};
    width: 40%;
    @media (max-width: 1080px) {
      width: 60%;
      text-align: center;
      margin: 40px auto;
    }
  }

  & button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.normal}
    }
  }
`;

export const FirstSectionColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  margin-left: 80px;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  & h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 40px 0;
    @media (max-width: 1080px) {
      width: 80%;
    }
  }
  & h1 {
    width: 80%;
    @media (max-width: 1080px) {
      width: 640px;
    }
    @media (max-width: 720px) {
      width: 92%;
    }
  }
`;

export const SecondSectionColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  & h3 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ThirdSectionColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  & h1 {
    margin: 40px auto;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    @media (max-width: 1080px) {
      width: 80%;
    }
  }
`;

export const FourthSectionColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  & p {
    width: 640px;
    text-align: center;
    margin: 40px auto 16px;
    @media (max-width: 720px) {
      width: 80%;
    }
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  margin-left: 80px;
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.primary_light};
  padding: 16px;
  border-radius: 8px;
  & h1 {
    color: #77bf41;
    font-size: 40px;
  }
  & h3 {
    text-decoration: line-through;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }

  & button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    margin-top: 12px;
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.normal}
    }
  }
`;
