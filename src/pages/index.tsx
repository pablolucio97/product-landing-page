import type { NextPage } from 'next'
import Head from 'next/head'
import {
  MdDesignServices,
  MdOutlineFastForward,
} from 'react-icons/md'
import { GroupInfo } from '../components/GroupInfo'
import { HeroTitle } from '../components/HeroTitle'
import { NextImage } from '../components/NextImage'
import { PrimaryButton } from '../components/PrimaryButton'
import { RevealFade } from '../components/RevealFade'
import { RevealZoom } from '../components/RevealZoom'
import { SubTitle } from '../components/SubTitle'
import { Text } from '../components/Text'
import { Title } from '../components/Title'
import { features } from '../data/data'
import {
  FirstSection,
  FirstSectionLineContainer,
  FirstSectionColumnContainer,
  PageContainer,
  PriceCard,
  SecondSection,
  ThirdSection,
  SecondSectionColumnContainer,
  SecondSectionLineContainer,
  ThirdSectionColumnContainer,
  ThirdSectionLineContainer,
  FourthSection,
  FourthSectionColumnContainer,
  FourthSectionLineContainer,
  FifthSectionLineContainer,
  FifthSection,
  SecondSectionFeaturesContainer,
  SecondSectionCardsContainer,

} from '../styles'

const Home: NextPage = () => {

  return (
    <PageContainer>
      <Head>
        <title>HeadPhone | Comprar headphone</title>
          {/* @ts-ignore */}
          <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#5454d4" />
      </Head>
      <FirstSection id="top-section">
        <FirstSectionLineContainer>
          <RevealZoom>
            <NextImage
              url='/phone.png'
              width={400}
              height={600}
            />
          </RevealZoom>
          <RevealFade
            bottom
          >
            <FirstSectionColumnContainer>
              <HeroTitle
                content='Curta cada momento com o super headphone'
                className='heroTitleLight'
              />
              <SubTitle
                content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
              />
              <PriceCard>
                <h1>R$ 299,99</h1>
                <SubTitle
                  content='Preço original: R$ 399,99'
                />
                <PrimaryButton
                  title='Comprar agora'
                  onClick={() => { }}
                />
              </PriceCard>
            </FirstSectionColumnContainer>
          </RevealFade>
        </FirstSectionLineContainer>
      </FirstSection>
      <SecondSection
        id="second-section"
      >
        <RevealFade>
          <SecondSectionLineContainer>
            <SecondSectionColumnContainer>
              <Title
                content='Curta cada momento com o super headphone'
              />
              <SubTitle
                content='Eleito o melhor headphone da catgeoria.'
              />
              <SecondSectionFeaturesContainer>
                <SecondSectionCardsContainer>
                  <GroupInfo
                    title='Desgin exclusivo'
                    content='Desenvolvido por designers profissionais'
                    className='featureCard'
                    titleClassName='cardTitle'
                    contentClassName='cardSubTitle'
                  >
                    <MdDesignServices size={24} />
                  </GroupInfo>
                  <GroupInfo
                    title='Praticidade total'
                    content='Pensado para proporcionar total praticidade'
                    className='featureCard'
                    titleClassName='cardTitle'
                    contentClassName='cardSubTitle'
                  >
                    <MdOutlineFastForward size={24} />
                  </GroupInfo>
                </SecondSectionCardsContainer>
                <RevealFade
                  right
                >
                  <NextImage
                    url="/phone2.png"
                    width={300}
                    height={300}
                  />
                </RevealFade>
              </SecondSectionFeaturesContainer>
            </SecondSectionColumnContainer>
          </SecondSectionLineContainer>
        </RevealFade>
      </SecondSection>

      <ThirdSection
        id="recursos"
      >
        <ThirdSectionColumnContainer>
          <Title
            content='Conheça todos os recursos do super headphone'
          />
          <RevealFade>
            <ThirdSectionLineContainer>
              {features.slice(0, 3).map(feature => (
                <GroupInfo
                  title={feature.title}
                  content={feature.content}
                  className='featureBadgeCard'
                  titleClassName='cardTitle'
                  contentClassName='cardSubTitle'
                >
                </GroupInfo>
              ))}
            </ThirdSectionLineContainer>
          </RevealFade>
          <RevealFade>
            <ThirdSectionLineContainer>
              {features.slice(3, 5).map(feature => (
                <GroupInfo
                  title={feature.title}
                  content={feature.content}
                  className='featureBadgeCard'
                  titleClassName='cardTitle'
                  contentClassName='cardSubTitle'
                >
                </GroupInfo>
              ))}
            </ThirdSectionLineContainer>
          </RevealFade>
          <RevealFade>
            <ThirdSectionLineContainer>
              {features.slice(5, 8).map(feature => (
                <GroupInfo
                  title={feature.title}
                  content={feature.content}
                  className='featureBadgeCard'
                  titleClassName='cardTitle'
                  contentClassName='cardSubTitle'
                >
                </GroupInfo>
              ))}
            </ThirdSectionLineContainer>
          </RevealFade>
        </ThirdSectionColumnContainer>
      </ThirdSection>

      <FourthSection
        id='fourth-section'
      >
        <FourthSectionColumnContainer>
          <Title
            content='Curta sua música'
          />
          <Text
            content='Adquira hoje mesmo o melhor headphone do mercado e viva momentos incríveis.'
          />
          <FourthSectionLineContainer
          >
            <RevealZoom>
              <NextImage
                url="/person2.jpg"
                width={620}
                height={400}
              />
            </RevealZoom>
          </FourthSectionLineContainer>
        </FourthSectionColumnContainer>
      </FourthSection>

      <FifthSection id='purchase'>
        <FifthSectionLineContainer>
          <Title
            content='Curta cada batida. Garanta seu novo headphone.'
          />
          <PrimaryButton
            title='Comprar agora'
            onClick={() => { }}
          />
        </FifthSectionLineContainer>
      </FifthSection>
    </PageContainer >
  )
}

export default Home
