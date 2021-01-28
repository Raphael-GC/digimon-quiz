import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Content>
            <p>
              <span>Você chegou na Ilha Arquivo!</span>
              <b>{name}</b>
              !!
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Perguntas</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Prepare-se!</p>
              //Questões 
            <button type="button">Confirmar</button>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
