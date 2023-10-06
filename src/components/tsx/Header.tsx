import { useSelector } from "react-redux"
import { ContainerHeader } from "./styled"
import { setTitle, useGlobal } from "../../store/ReducerGlobal"
import { useNuiEvent } from "../../hooks/useNuiEvent"
import { useDispatch } from "react-redux"

const Header = () => {
    const {title} = useSelector(useGlobal)
    const dispatch = useDispatch()

    useNuiEvent('SET_TITLE', (text:string) => dispatch(setTitle(text)))

    return (
        <ContainerHeader>
            <span>{title}</span>
            <div className="fx"/>
        </ContainerHeader>
    )   
}

export default Header