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
import { TopScrollButton } from '../components/TopScrollButton'
import { MdArrowUpward } from 'react-icons/md'
import { PrimaryButton } from '../components/PrimaryButton'

interface LayoutProps {
    children: ReactNode
}

const Home = ({ children }: LayoutProps) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [headerAnimation, setHeaderAnimation] = useState(false)
    const [scrollTopAnimation, setScrollTopAnimation] = useState(false)

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }

    function scrollscrollsAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        console.log(topPos)
        if (topPos > 20) {
            setHeaderAnimation(true)
        } else {
            setHeaderAnimation(false)
        }
    }

    function scrollTopScrollButtonAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        console.log(topPos)
        if (topPos > 500) {
            setScrollTopAnimation(true)
        } else {
            setScrollTopAnimation(false)
        }
    }


    function callAnimations() {
        scrollTopScrollButtonAnimation()
        scrollscrollsAnimation()
    }

    useEffect(() => {
        window.addEventListener('scroll', callAnimations)
        return () => window.removeEventListener('scroll', callAnimations)
    }, [])


    return (
        <PageContainer id='top'>
            <TopScrollButton
                className={scrollTopAnimation ? 'animatedTopScroll' : 'normalTopScroll'}
                icon={<MdArrowUpward />}
                elementReferenceId='top'
            />
            <Header
                className={headerAnimation ? 'animatedHeader' : 'normalHeader'}
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
                            content='Recursos'
                            url='#recursos'
                            onClick={toggleDrawer}
                            style={{
                                color: theme.colors.title
                            }}
                        />
                        <PrimaryButton
                            title='Adquirir produto'
                            onClick={toggleDrawer}
                            style={{
                                color: theme.colors.white
                            }}
                        />
                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={toggleDrawer}

                />

                <HeaderLogoContainer>
                <Logo
                        imageUrl='/logo.svg'
                        size={headerAnimation ? 'small' : 'medium'}
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Recursos'
                        url='#recursos'
                        onClick={() => setIsDrawerOpen(false)}
                    />
                    <PrimaryButton
                        title='Adquirir produto'
                        onClick={() => setIsDrawerOpen(false)}
                        style={{
                            color: theme.colors.black,
                            background: theme.colors.secondary
                        }}
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
                        content='Produtos'
                        style={{
                            color: theme.colors.black,
                            fontWeight: 500,
                        }}
                    />
                    <FooterLink
                        url='/'
                        content='Todos os produtos'
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
                        githubUrl='/'
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
                    content='PabloSilvaDev - © Copyright 2022'
                    style={{
                        fontSize: 10
                    }}
                />
            </FooterBadge>
        </PageContainer>
    )
}

export default Home
