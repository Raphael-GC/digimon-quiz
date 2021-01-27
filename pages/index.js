import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'


//---------Background anterior nao responsivo-------------//

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: inherit;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  margin-left: 570px; // Para centralizar horizontalmente a Div na tela.
  margin-top: 30px;  // Para centralizar horizontalmente a Div na tela.
  @media screen and (max-width: 500px) {
    margin: 225px auto 5px auto; // Para tirar a Div de cima do Background no mobile.
    padding: 15px;
  }
`;

// export default function Home() {
//   return (
//     <div style={{ backgroundImage: `url(${db.bg})` }}>
//       My page
//     </div>
//   )
// }

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo srcImage={db.logo}></QuizLogo>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Other quizzes</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Comming soon...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Raphael-GC"/>
    </QuizBackground>
  )
}