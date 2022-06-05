import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/Image'
import { PrimaryButton } from '../components/PrimaryButton'
import { SubTitle } from '../components/SubTitle'
import { Title } from '../components/Title'
import styles from './styles.module.scss'

import { RevealFade } from '../components/RevealFade'
import { GroupInfo } from '../components/GroupInfo'
import { MdDesignServices, MdOutlineFastForward } from 'react-icons/md'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing</title>
      </Head>
      <section id="top-section" className={styles.topSection}>
        <header>
          <Image
            src="https://www.pablosilvadev.com.br/logo.svg"
            alt="psd-landing-page"
            width={48}
            height={48}
          />
        </header>
        <div className={styles.contentContainer}>
          <img src="/phone.png" alt="psd" />
          <div className={styles.titleContainer}>
            <Title
              content='Curta cada momento com o super headphone'
              className={styles.titleLight}
            />
            <SubTitle
              content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
              className={styles.subtitleLight}
            />
            <div className={styles.priceContainer}>
              <h1>R$ 299,99</h1>
              <SubTitle
                content='Preço original: R$ 399,99'
                className={styles.subtitleLight}
              />
              <PrimaryButton
                title='Comprar agora'
                onClick={() => { }}
                className={styles.purshaseButton}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="first-feature-section" className={styles.firstFeatureSection}>
        <RevealFade>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <Title
                content='Curta cada momento com o super headphone'
                className={styles.titleDark}
              />
              <SubTitle
                content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
                className={styles.subtitleDark}
                style={{ marginTop: 12, marginBottom: 12 }}
              />
              <GroupInfo
                title='Desgin exclusivo'
                content='Desenvolvido por designers profissionais'
                className={styles.featureCard}
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdDesignServices size={24} />
              </GroupInfo>
              <GroupInfo
                title='Praticidade total'
                content='Pensado para proporcionar total praticidade'
                className={styles.featureCard}
                titleClassName='cardTitle'
                contentClassName='cardSubTitle'
              >
                <MdOutlineFastForward size={24} />
              </GroupInfo>
            </div>
            <RevealFade
              right
            >
              <img src="/phone2.png" alt="psd" />
            </RevealFade>
          </div>
        </RevealFade>
      </section>

    </div>
  )
}

export default Home
