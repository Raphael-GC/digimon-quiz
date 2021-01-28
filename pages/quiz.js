import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <QuizBackground backgroundImage={db.bg2}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              Você chegou na Ilha Arquivo!
              <br />
              <br />
              🏝️ Parabéns,
              {' '}
              {name}
              {' '}
              !!
            </h1>

          </Widget.Header>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Perguntas</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Prepare-se!</p>
            <ul>
              <li>Resposta 1</li>
              <li>Resposta 2</li>
              <li>Resposta 3</li>
              <li>Resposta 4</li>
            </ul>
            <button type="button">Confirmar</button>
            <button type="submit">
              <Link href="/">
                <a>Home</a>
              </Link>
            </button>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
