import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    background: #f2f2f2;
    margin: 0 0 40px 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    touch-action: manipulation;
    @media (max-width: 651px) { 
      margin: 0;
     }

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

  header {
    overflow: hidden;
  }

  .hover {
  position: relative;

  &:hover &__no-hover {
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover &__hover {
    opacity: 1;
    transition: all 0.3s ease;
  }

  &__hover {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &__no-hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
}
`
