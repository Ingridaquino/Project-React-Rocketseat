import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #F0F2F5;
      --red: #e52e4d;
      --blue: #5429cc;

      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #969cb3;

      --background: #f0f2f5;
      --shape: #ffff;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body{
      background: var(--background);
      -webkit-font-smoothing:antialiased; // Para as fonts ficarem detalhadas
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

