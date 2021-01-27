import Head from 'next/head';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db.theme;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
        <title>Digimon Adventure Quiz | Você é um DigiEscolhido?</title>
        <meta name="title" content="Digimon Adventure Quiz | Você é um DigiEscolhido?" />
        <meta name="description" content="Mostre todo seu conhecimento sobre o mundo dos monstros digitais." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digimon-quiz.raphael-gc.vercel.app" />
        <meta property="og:title" content="Digimon Adventure Quiz | Você é um DigiEscolhido?" />
        <meta property="og:description" content="Mostre todo seu conhecimento sobre o mundo dos monstros digitais." />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://digimon-quiz.raphael-gc.vercel.app" />
        <meta property="twitter:title" content="Digimon Adventure Quiz | Você é um DigiEscolhido?" />
        <meta property="twitter:description" content="Mostre todo seu conhecimento sobre o mundo dos monstros digitais." />
        <meta property="twitter:image" content={db.bg} />

        <link rel="shortcut icon" href="/favicon.ico" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}