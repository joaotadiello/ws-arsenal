import { createGlobalStyle } from "styled-components";
import BG_1 from '../assets/bg.png';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        margin:0;
        padding:0;
        border:0;
        /* font-family: 'Gilroy-Light';     */
        &::-webkit-scrollbar {
            display: none;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        ol, ul {
            list-style: none;
        }
    }

    img {
      user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    body{
        width: 100vw;
        height: 100vh;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    :root {
        font-size: 100%;
        
    }

    .nui {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
        background: radial-gradient(60.78% 60.78% at 50% 50%, rgba(16, 94, 99, 0.80) 0%, rgba(1, 15, 16, 0.80) 100%);
    }

    .fx-bg {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-image: url(${BG_1});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        mix-blend-mode: overlay;
    }

    @media screen and (min-width: 3072px) {
        :root {
            font-size: 190%;
        }
    }
    @media screen and (min-width: 2560px) and (max-width: 3071px){
        :root {
            font-size: 140%;
        }
    }

    @media screen and (min-width: 1920px) and (max-width: 1559px) {
        :root {
            font-size: 100%;
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1600px) {
        :root {
            font-size:70%;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        :root {
            font-size: 60%;
        }
    }
    @media screen and (min-width: 800px) and (max-width: 1024px) {
        :root {
            font-size: 50%;
        }
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
