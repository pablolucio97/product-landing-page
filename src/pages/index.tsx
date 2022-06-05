import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/Image'
import { PrimaryButton } from '../components/PrimaryButton'
import { SubTitle } from '../components/SubTitle'
import { Title } from '../components/Title'
import styles from './styles.module.scss'

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
              className='title'
            />
            <SubTitle
              content='Para Iphone ou android. Não importa a plataforma, temos o produto certo para você.'
              className='subtitle'
            />
            <div className={styles.priceContainer}>
              <h1>R$ 299,99</h1>
              <SubTitle
                content='Preço original: R$ 399,99'
                className='subtitle'
              />
              <PrimaryButton
                title='Comprar agora'
                onClick={() => { }}
                className='purshase-button'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
