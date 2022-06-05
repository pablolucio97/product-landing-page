import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/Image'
import { PrimaryButton } from '../components/PrimaryButton'
import { SubTitle } from '../components/SubTitle'
import { Title } from '../components/Title'

import { RevealFade } from '../components/RevealFade'
import { GroupInfo } from '../components/GroupInfo'
import { MdDesignServices, MdOutlineFastForward } from 'react-icons/md'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import {
  ContentContainer,
  FirstFeatureSection,
  PageContainer,
  PriceContainer,
  SecondFeatureSection,
  TitleContainer,
  TopSection
 } from '../styles'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Landing</title>
      </Head>
      <header>
        <Image
          src="https://www.pablosilvadev.com.br/logo.svg"
          alt="psd-landing-page"
          width={48}
          height={48}
        />
      </header>
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

      <FirstFeatureSection id="first-feature-section">
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
      </FirstFeatureSection>

      <SecondFeatureSection id="second-feature-section">

      </SecondFeatureSection>

    </PageContainer>
  )
}

export default Home
