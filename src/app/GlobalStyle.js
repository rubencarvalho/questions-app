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
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
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
.polls-icon{fill:rgba(0,0,0,0);stroke:#000;stroke-width:1.5px;opacity:0.15}
.active-item{
  color: #2182c3;
    font-weight: 700;
    border-bottom: 3px solid #2182c3;
    text-decoration-style:
solid
;
}

.hidden-icon {
    opacity: 0;
    transition: opacity .1s linear;
    transition-property: opacity;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    transition-delay: 0s;
}

.admin-nav__active-item {
  color: #2182c3;
  text-decoration-style:
solid
;
    font-weight: 700;
    border-bottom: 3px solid #2182c3;
}
`