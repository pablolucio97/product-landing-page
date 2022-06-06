import Head from 'next/head'
import Image from 'next/Image'
import { Text } from '../components/Text'
import { PageContainer, } from '../styles'
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
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Home = ({ children }: LayoutProps) => {
    return (
        <PageContainer>
            <header>
                <Image
                    src="https://www.pablosilvadev.com.br/logo.svg"
                    alt="psd-landing-page"
                    width={48}
                    height={48}
                />
            </header>
            <main>{children}</main>
            <Footer>
                <FooterFirstSection>
                    <FooterTitle
                        content='Sobre nós'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 500,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Nossa missão'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 300,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Nossa história'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 300,
                        }}
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='Soluções'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 500,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Landing Pages'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 300,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Sites institucionais'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 300,
                        }}
                    />
                </FooterSecondSection>
                <FooterThirdSection>
                    <FooterTitle
                        content='Nossas redes'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 500,
                        }}
                    />
                    <SocialCollection
                        linkedinUrl='/'
                        youtubeUrl='/'
                        facebookUrl='/'
                        githubUrl='/'
                        twitterUrl='/'
                        instagramUrl='/'
                    />
                </FooterThirdSection>
                <FooterFourthSection>
                    <FooterTitle
                        content='Links úteis'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 500,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Política de privacidade'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 300,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Termos de uso'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 300,
                        }}
                    />
                </FooterFourthSection>
            </Footer>
            <FooterBadge>
                <Divider />
                <Text
                    content='PabloSilvaDev - 2022 - CNPJ 9834 9332'
                    style={{
                        fontSize: 10
                    }}
                />
            </FooterBadge>
        </PageContainer>
    )
}

export default Home
