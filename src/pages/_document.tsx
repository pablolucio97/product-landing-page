import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    {/* @ts-ignore */}
                    <meta charset="UTF-8" />
                    <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
                    <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
                    <meta name='author' content='Pablo Silva' />
                    <meta name="theme-color" content="#5454d4" />
                    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600&family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}