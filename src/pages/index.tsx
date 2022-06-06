import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/Image'
import { PrimaryButton } from '../components/PrimaryButton'
import { Text } from '../components/Text'
import { SubTitle } from '../components/SubTitle'
import { Title } from '../components/Title'

import { RevealFade } from '../components/RevealFade'
import { GroupInfo } from '../components/GroupInfo'
import { MdDesignServices, MdOutlineFastForward, MdZoomOut } from 'react-icons/md'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import {
  ColumnContainer,
  ContentContainer,
  LineContainer,
  PageContainer,
  PriceContainer,
  TitleContainer,
  TopSection
} from '../styles'
import { theme } from '../themes/theme'
import { Footer } from '../components/Footer'
import { FooterFirstSection } from '../components/Footer/FooterFirstSection'
import { FooterLink } from '../components/Footer/FooterLink'
import { FooterSecondSection } from '../components/Footer/FooterSecondSection'
import { FooterTitle } from '../components/Footer/FooterTitle'
import { FooterThirdSection } from '../components/Footer/FooterThirdSection'
import { FooterFourthSection } from '../components/Footer/FooterFourthSection'
import { SocialCollection } from '../components/SocialCollection'
import { FooterBadge } from '../components/FooterBadge'
import { Divider } from '../components/Divider'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Landing</title>
      </Head>
      <TopSection id="top-section">
        <ContentContainer>
          {/* eslint-disable-next-line*/}
          <img src="/phone.png" alt="psd" width={400} />
          <TitleContainer>
            <Title
              content='Curta cada momento com o super headphone'
              className='titleLight'
            />
            <SubTitle
              content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
              className='subtitleLight'
            />
            <PriceContainer>
              <h1>R$ 299,99</h1>
              <SubTitle
                content='Preço original: R$ 399,99'
                className='subtitleLight'
              />
              <PrimaryButton
                title='Comprar agora'
                onClick={() => { }}
              />
            </PriceContainer>
          </TitleContainer>
        </ContentContainer>
      </TopSection>

      <Section
        id="first-feature-section"
        alignItems='center'
      >
        <RevealFade>
          <ContentContainer>
            <TitleContainer>
              <Title
                content='Curta cada momento com o super headphone'
                className='titleDark'
              />
              <SubTitle
                content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
                className='subtitleDark'
                style={{ marginTop: 12, marginBottom: 12 }}
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
            </TitleContainer>
            <RevealFade
              right
            >
              <img src="/phone2.png" alt="psd" />
            </RevealFade>
          </ContentContainer>
        </RevealFade>
      </Section>

      <Section
        id="second-feature-section"
        backgroundColor={theme.colors.primary_dark}
        minHeight='80vh'
        justifyContent='space-evenly'
      >
        <ColumnContainer>
          <Title
            content='Isto é tudo o que você irá precisar'
            className='titleLight'
            style={{ width: 920, margin: 40 }}
          />
          <LineContainer>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
          </LineContainer>
          <LineContainer>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
          </LineContainer>
          <LineContainer>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
            <GroupInfo
              title='Praticidade total'
              content='Pensado para proporcionar total praticidade'
              className='featureBadgeCard'
              titleClassName='cardTitle'
              contentClassName='cardSubTitle'
            >
              <MdOutlineFastForward size={24} />
            </GroupInfo>
          </LineContainer>
        </ColumnContainer>
      </Section>

      <Section
        id='third-feature-section'
        minHeight='80vh'
        justifyContent='space-evenly'
      >
        <ColumnContainer>
          <Title
            content='Curta sua música'
          />
          <Text
            content='Crie landing pages incríveis e personalizadas para seu produto. Comece hoje mesmo. Acesse www.pablosilvadev.com.br'
            style={{
              width: 800,
              textAlign: 'center',
              marginTop: 40,
              marginBottom: 40
            }}
          />
          <LineContainer
            style={{
              justifyContent: 'center',
            }}
          >
            <Image
              src="/person2.jpg"
              alt="psd-landing-page"
              width={620}
              height={400}
            />
          </LineContainer>
        </ColumnContainer>
      </Section>

      <Section
        id='fourth-feature-section'
        minHeight='50vh'
        justifyContent='center'
        backgroundColor={theme.colors.primary}
      >
        <LineContainer
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Title
            content='Curta cada batida. Garanta seu novo headphone.'
            style={{
              width: 560,
              color: theme.colors.white
            }}
          />
          <PrimaryButton
            title='Comprar agora'
            onClick={() => { }}
            style={{
              backgroundColor: theme.colors.secondary,
              color: theme.colors.black
            }}
          />
        </LineContainer>
      </Section>
    </PageContainer>
  )
}

export default Home
