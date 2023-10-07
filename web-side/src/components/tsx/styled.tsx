import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: auto;
    font-family: 'SF Pro Display';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1em;

    & > span {
        font-size: 2.25em;
        font-weight: 800;
    }

    .fx {
        width: 50%;
        height: .25em;
        background-color: #FFF205;
        border-radius: 5px;
    }
`;

export const ContainerNavegation = styled.nav`
    width: 83.125em;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position:relative;
    margin-top: 5.375em;
    z-index: 10;
    .arrows {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.5em;
        margin-bottom: .5em;

        & > span {
            font-family: 'SF Pro Display';
            font-weight: 800;
            font-style: normal;
            font-size: 1.5em;
            color: #FFF;
        }
    }

    .menus {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap:5.1875em;

        .item {
            width: 6.25em;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            transition: all 0.5s;
        }

        .item > span {
            width: 100%;
            color: #FFF;
            text-align: center;
            font-family: 'SF Pro Display';
            font-size: 1.125em;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }



        .item > .fx {
            width: 0%;
            height: .25em;
            background-color: #FFF205;
            border-radius: 5px;
            position: absolute;
            bottom: 0;
            opacity: 0;
            transition: all 0.5s;

        }

    }


    .fx-2 {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: .25em;
        opacity: 0.15;
        background: #FFF;
    }
`

