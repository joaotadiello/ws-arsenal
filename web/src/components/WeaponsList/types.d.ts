import { HTMLProps } from "react";

export interface CardList extends HTMLProps<HTMLDivElement> {
    name:string;
    selected?:boolean;
}