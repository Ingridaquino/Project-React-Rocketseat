import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #F0F2F5;
      --red: #E52E4D;
      --blue: #5429cc;

      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #969cb3;

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
        color: red;
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




`
