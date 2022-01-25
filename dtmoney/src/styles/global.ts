import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #F0F2F5;
      --red: #E52E4D;
      --blue: #5429cc;

      --green: #33cc95;

      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #5C5C5C;

      --shape: #ffff;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
      background: var(--background);
      -webkit-font-smoothing:antialiased; // Para as fonts ficarem detalhadas
    }
    
    body, input, textarea, button {
        font-family:'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

      // font-size: 16px (DESKTOP)
    // REM = 1rem = 16px
    html {
      @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
        font-size:81.5%; // 14px
      }
    }


    button { 
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed; //Mostra uma plaquinha
    }

      .react-modal-overlay {
        background: rgba(0, 0, 0, 0.8);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;

        position: relative;
        border-radius: 0.24rem;

      }

      .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }

`
;
