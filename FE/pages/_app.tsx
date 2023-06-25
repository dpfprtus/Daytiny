import '../public/assets/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Layout from '../style/Layout';
import Title from '../components/layout/Title';
import SlideTransition from '../style/SlideTransition';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Spoqa Hans Sans Neo', 'sans-serif';
    font-weight: normal;
    font-style: normal;
  }

	@font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/assets/fonts/IBMPlexSansKR-Regular.ttf') format('ttf');
    font-weight:

  li {
    list-style: none;
  }

  a {
    text-decoration : none;
    color : inherit;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 12px;
  }

  img {
    width: 100%;
    height: auto;
  }

  input {
    &:focus {
      outline: none;
      border: none;
    }
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
  }

  .ir {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  :root {
    --main-color: #E48254;
    --main-title-color: #444444;
    --sub-text-b: #333333;
    --sub-text-g: #9E9E9E;
    --warning-color: #E26F6B;
    --bg-color: #FFFFFF;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Title />
        <SlideTransition>
          <Component {...pageProps} />
        </SlideTransition>
      </Layout>
    </>
  );
}

export default MyApp;
