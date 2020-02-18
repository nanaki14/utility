import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
      &:before,
      &:after {
        box-sizing: border-box;
      }
    }
  }

  html,
  body {
    -webkit-text-size-adjust: 100%;
    width: 100%;
    height: 100%;
    color: ${colors.black87};
    font-family: 'Noto Sans JP', 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  'Yu Gothic Medium', YuGothic, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', meiryo, sans-serif;
    font-display: swap;
    font-size: 62.5%;
    font-weight: 500;
    line-height: 1;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: unset;
    @media only screen and(-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 2dppx) {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  body {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    background-color: #EBEBF5;
  }

  article,
  aside,
  figure,
  footer,
  header,
  section {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    padding: 0;
    text-align: left;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  iframe {
    border: none;
  }
`

export default GlobalStyles
