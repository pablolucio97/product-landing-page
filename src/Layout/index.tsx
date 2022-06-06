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
import { ReactNode, useEffect, useState } from 'react'
import { Drawer } from '../components/Drawer'
import { DrawerButton } from '../components/DrawerButton'
import { HeaderLogoContainer } from '../components/Header/HeaderLogoContainer'
import { Logo } from '../components/Logo'
import { Header } from '../components/Header'
import { HeaderLinksContainer } from '../components/Header/HeaderLinksContainer'
import { HeaderLink } from '../components/Header/HeaderLink'

interface LayoutProps {
    children: ReactNode
}

const Home = ({ children }: LayoutProps) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [headerAnimation, setHeaderAnimation] = useState(false)

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }

    function scrollAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        console.log(topPos)
        if (topPos > 20) {
            setHeaderAnimation(true)
        } else {
            setHeaderAnimation(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollAnimation)
        return () => window.removeEventListener('scroll', scrollAnimation)
    }, [])

    return (
        <PageContainer>
            <Header
                className={headerAnimation ? 'animated' : 'normal'}
            >
                {isDrawerOpen &&
                    <Drawer
                        toggleDrawer={toggleDrawer}
                        direction='top'
                        style={{
                            lineHeight: 2
                        }}
                    >
                        <HeaderLink
                            content='Quem somos'
                            url='/'
                            style={{
                                color: theme.colors.title
                            }}
                        />
                        <HeaderLink
                            content='Soluções'
                            url='/'
                            style={{
                                color: theme.colors.title
                            }}
                        />
                        <HeaderLink
                            content='Contato'
                            url='/'
                            style={{
                                color: theme.colors.title
                            }}
                        />

                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={toggleDrawer}

                />

                <HeaderLogoContainer>
                    <Logo
                        imageUrl='https://www.pablosilvadev.com.br/logo.svg'
                        size='medium'
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Quem somos'
                        url='/'
                    />
                    <HeaderLink
                        content='Soluções'
                        url='/'
                    />
                    <HeaderLink
                        content='Contato'
                        url='/'
                    />
                </HeaderLinksContainer>


            </Header>
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
