import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Md2KPlus, MdCellWifi, MdDesignServices, MdFollowTheSigns, MdOutlineFastForward,
  MdZoomOut
} from 'react-icons/md'
import { useTheme } from 'styled-components'
import { GroupInfo } from '../components/GroupInfo'
import { HeroTitle } from '../components/HeroTitle'
import { NextImage } from '../components/NextImage'
import { PrimaryButton } from '../components/PrimaryButton'
import { RevealFade } from '../components/RevealFade'
import { RevealZoom } from '../components/RevealZoom'
import { Section } from '../components/Section'
import { SubTitle } from '../components/SubTitle'
import { Text } from '../components/Text'
import { Title } from '../components/Title'
import {
  ColumnContainer,
  FirstSection, FirstSectionLineContainer, FirstSectionColumnContainer, LineContainer,
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
  FivethSection,
  FifthSectionLineContainer,

} from '../styles'



const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <PageContainer>
      <Head>
        <title>Landing</title>
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
                content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
                className='subtitleDark'
              />
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
            </SecondSectionColumnContainer>
            <RevealFade
              right
            >
              <NextImage
                url="/phone2.png"
                width={300}
                height={300}
              />
            </RevealFade>
          </SecondSectionLineContainer>
        </RevealFade>
      </SecondSection>

      <ThirdSection
        id="third-section"
      >
        <ThirdSectionColumnContainer>
          <Title
            content='Curta cada momento com o super headphone'
          />
          <RevealFade>
            <ThirdSectionLineContainer>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdOutlineFastForward size={24} className='icon' />
              </GroupInfo>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdZoomOut size={24} className='icon' />
              </GroupInfo>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <Md2KPlus size={24} className='icon' />
              </GroupInfo>
            </ThirdSectionLineContainer>
          </RevealFade>
          <RevealFade>
            <ThirdSectionLineContainer>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdFollowTheSigns size={24} className='icon' />
              </GroupInfo>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdCellWifi size={24} className='icon' />
              </GroupInfo>
            </ThirdSectionLineContainer>
          </RevealFade>
          <RevealFade>
            <ThirdSectionLineContainer>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdOutlineFastForward size={24} className='icon' />
              </GroupInfo>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdOutlineFastForward size={24} className='icon' />
              </GroupInfo>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className='featureBadgeCard'
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdOutlineFastForward size={24} className='icon' />
              </GroupInfo>
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
            content='Crie landing pages incríveis e personalizadas para seu produto. Comece hoje mesmo. Acesse www.pablosilvadev.com.br'
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

      <FivethSection>
        <FifthSectionLineContainer>
          <Title
            content='Curta cada batida. Garanta seu novo headphone.'
          />
          <PrimaryButton
            title='Comprar agora'
            onClick={() => { }}
          />
        </FifthSectionLineContainer>
      </FivethSection>
    </PageContainer>
  )
}

export default Home
