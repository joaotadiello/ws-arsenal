import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & > small {
            color: rgba(255, 255, 255, 0.50);
            font-family: 'SF Pro Display';
            font-size: 1.5em;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        & > span {
            color: #FFF;
            text-align: right;
            font-family:'SF Pro Display';
            font-size: 1.5em;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            & > b {
                color: #FFF205;
            }
        }

        & > section {
            display: grid;
            grid-template-columns: repeat(5,2.0625em);
            grid-template-rows: 0.8125em;
            column-gap: 0.375em;

            & > .progress {
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.15);

                &-active {
                    background: #FFF205;
                }
            }
        }
    }
`

export default Container