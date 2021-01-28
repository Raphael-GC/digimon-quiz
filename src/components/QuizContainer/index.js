import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  margin-left: 570px; // Para centralizar horizontalmente a Div na tela.
  margin-top: -20px;  // Para centralizar verticalmente a Div na tela.
  @media screen and (max-width: 500px) {
    margin: 225px auto 5px auto; // Para tirar a Div de cima do Background no mobile.
    padding: 15px;
  }
`;

QuizContainer.ButtonPlay = styled.button`
background: #FFFFFF;
width: 100%;
font-size: 20px;
margin-top: 15px;
color: ${({ theme }) => theme.colors.primary};
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
border-radius: 4px;
&:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
`;

export default QuizContainer;