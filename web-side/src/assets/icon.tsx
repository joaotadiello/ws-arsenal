import { FC, HTMLProps } from "react"

interface Props extends HTMLProps<SVGAElement>{
    fill?:string;
    opacity?:string;
}

export const Arrows = ({style,fill,opacity}:Props) => {
    return (
        <svg style={style} width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.99998L10 -1.52588e-05V20L0 9.99998Z" fill={fill || "white"} fillOpacity={opacity || "0.1"} />
        </svg>
    )
}