import styled from "styled-components";

const Container = styled.div<{image:string}>`
    width: 100%;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-right: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    padding: 0 0 0 0;
    justify-content: space-between;
    background-image: ${(props) => `url(${props.image})`};
    background-repeat: no-repeat;
    background-position: center 6em;
    align-items: center;
    transition: background-size .5s ease; 

    .weapon-name {
        width: 100%;
        display: flex;
        gap: .75em;

        & > span {
            color: #FFF;
            text-align: center;
            font-family: 'SF Pro Display';
            font-size: 1.5em;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-transform: capitalize;
        }
        &-fx {
            width: 0.625em;
            height: 0.625em;
            border-radius: 50%;
            background-color:#FFF205;
        }
    }

    & > section {
        width:100%;
        height:8.75em;
        display: flex;
        gap:2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > span {
            color: #FFF;
            text-align: center;
            font-family: 'SF Pro Display';
            font-size: 1.5em;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            & > b {
                color: #2BB466;
            }
        }

        & > button {
            width:88%;
            height:100%;
            background: #FFF205;
            outline:none;
            border:none;
            color: #6A6500;
            text-align: center;
            font-family: 'SF Pro Display';
            font-size: 1.5em;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            border-radius:2px;
            transition: all 200ms ease;

            &:hover {
                color: #282600;
                box-shadow: 0px 0px 50px 0px rgba(157, 149, 0, 0.50);
            }
        }
    }
`

export default Container;