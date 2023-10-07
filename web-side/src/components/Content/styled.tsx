import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 33em;
    display: flex;
    grid-template-columns: repeat(3,33.625em);
    grid-template-rows: 33em;
    column-gap: 2.1875em;
    margin-top: 4.6875em;
    opacity: 0;
    transition: all 1s ease;
    position: relative;
    z-index: 10;
`