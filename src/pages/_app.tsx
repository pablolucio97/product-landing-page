import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../themes/theme'
import { GlobalStyle } from '../styles/GlobalStyle'
import Layout from '../Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
