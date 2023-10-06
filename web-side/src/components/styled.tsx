import styled from 'styled-components';

const Container = styled.div`
    width:112.9375em;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 1s ease;
`;

export const Button = styled.button`
    padding: 1em;
    background: #FFF205;
    box-shadow: 0px 0px 50px 0px rgba(157, 149, 0, 0.50);
    outline:none;
    border:none;
    color: #6A6500;
    text-align: center;
    font-family: 'SF Pro Display';
    font-size: 1.5em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    right:0;
    top:0;
    position: absolute;
    border-radius:2px;
    display: flex;
    gap: .25em;
`

export default Container;