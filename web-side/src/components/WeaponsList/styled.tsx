import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:1em;
    overflow: scroll;

    .card {
        width: 100%;
        min-height: 4.625em;
        border: 1px solid rgba(255, 255, 255, 0.25);
        padding-left: 2em;
        display: flex;
        align-items: center;
        gap:1em;
        transition: all 0.3s;

        & > span {
            color: rgba(255, 255, 255, 0.25);
            font-family: 'SF Pro Display';
            font-size: 1.5em;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        &:hover {
            border: 1px solid rgba(255, 255, 255, 0.35);

            .card > span {
                color: rgba(255, 255, 255, 0.35)
            }
        }
    }
`

export default Container;