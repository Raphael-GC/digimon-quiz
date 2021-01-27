<h1 align="center">
    <img alt="Digivice Logo" title="#Digimon Adventure Quiz" src=".github/Digivice.png" width="200px" /><br>
    Digimon Adventure Quiz
</h1>

<h3 align="center"> 
Você foi DigiEscolhido(a) ?
</h3>
<h4 align="center"> 
  👨‍💻 "Mostre todo seu conhecimento sobre o mundo dos monstros digitais!" 👩‍💻
</h4>

<p align="center">
    <a href="https://github.com/Raphael-GC/digimon-quiz/stargazers">
        <img alt="Stargazers" src="https://img.shields.io/github/stars/Raphael-GC/digimon-quiz?style=social">
    </a>
    <a href="https://github.com/Raphael-GC/digimon-quiz/commits/master">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Raphael-GC/digimon-quiz">
    </a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/Raphael-GC/digimon-quiz">
    <img alt="GitHub license" src="https://img.shields.io/github/license/Raphael-GC/digimon-quiz?color=%27072009">
</p>

<p align="center">
  <a href="#Sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Base">Base</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#View">View</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Notes">Notes</a>
</p>

<br>
---
<br>

## 👨‍💻 Sobre  

> Este projeto de quiz foi criado durante o evento Imersão React v2 - (Next.js), da Alura. Os vídeos foram ministrados por Mario Souto e Juliana Amoasei. A proposta era criar uma rede de quizzes interligados e utilizar o Next.js com Styled Component, sem arquivos HTML e CSS. Pois tudo está embutido nos arquivos JS. 

✅ DIA 1 - Introdução ao Next.JS, Create React App, Styled Components e o Deploy na Vercel.
* DIA 2 - Estilo SPA, as vantagens do State e usar bem um Linter.
* DIA 3 - Protocolo HTTP, Envio e busca de dados de um back-end via API e a Construção do formulário do Quiz.
* DIA 4 - Finalizar o formulário com máquinas de estados para forms, Conexão com quizzes de outras pessoas e Inserção de animações com Lottie.
* DIA 5 - Ajustes finais e Animação da Home com o FramerMotion.

---
### Base

Para inciar o projeto é necessário executar [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) com [npm](https://docs.npmjs.com/cli/init) ou [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), conforme exemplo:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

### Deploy

Use a plataforma da  [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) para realizar o deploy, criando uma conta hobby (gratuita) e dando permissão de visualização ao repositório do seu projeto.

### View

[Visualize](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)  como fica a página após o deploy da base.

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
