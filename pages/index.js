import React from 'react';
// import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Link from 'next/link'     (Para fazer apontamento entre as paginas sem router);

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import InputBase from '../src/components/Input';

// ---------Background anterior nao responsivo-------------//

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: inherit;
// `;

export default function Home() {
  // Head na page principal e não componentizada pois as meta tags não estavam indo dessa forma.
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={db.vercelUrl} />
        <meta property="og:title" content="Digimon Adventure Quiz" />
        <meta property="og:description" content="Mostre todo seu conhecimento sobre o mundo dos monstros digitais." />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={db.bg} />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content={db.bg} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // router manda para a próxima página. Fazendo uma submissão por meio do react.
            }}
            >
              <InputBase
                onChange={(infosDoEvento) => {
                  // State

                  setName(infosDoEvento.target.value);
                  // name = infosDoEvento.target.value;
                }}
                placeholder="Diga aqui seu nome!"
              />
              <br />
              <QuizContainer.ButtonPlay type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </QuizContainer.ButtonPlay>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Em breve...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.gitUrl} />
    </QuizBackground>
  );
}
