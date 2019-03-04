import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }

  input, textarea, button {
    font-size: 1em;
  }

  input, textarea {
    border: 2px solid #ddd;
    padding-left: 4px;
  }

  button {
    background: #333;
    border-radius: 4px;
    color: white;
    font-weight: bold;
  }

  header {
    overflow: hidden;
  }
`
