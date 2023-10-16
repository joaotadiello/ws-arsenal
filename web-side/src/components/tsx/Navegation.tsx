import { useEffect, useState } from "react"
import { ContainerNavegation } from "./styled"
import { Arrows } from "../../assets/icon";
import { useSelector } from "react-redux";
import { setCategorySelected, setCategorys, setWeaponsList, useGlobal } from "../../store/ReducerGlobal";
import { useDispatch } from "react-redux";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { debugData } from "../../utils/debugData";
import { fetchNui } from "../../utils/fetchNui";

debugData([
    {
        action: 'SET_CATEGORYS',
        data: ["Automatica", "Pistolas", "Shotguns", "Rifles", "PP", "Ammo"],
    }, 
])

const Navegation = () => {
    const [block, setBlock] = useState<boolean>(false);
    const { categorys, categorySelected } = useSelector(useGlobal);

    const dispatch = useDispatch()

    const handleSelected = (item: string) => {
        dispatch(setCategorySelected(item))
    }

    useNuiEvent('SET_CATEGORYS', (data: any) => dispatch(setCategorys(data)))

    useEffect(() => {
        if (categorySelected === '') return;
        fetchNui('armory:selectedCategory', categorySelected)
        .then(result => {
            dispatch(setWeaponsList(result))
            setBlock(false)
        })
    }, [categorySelected])

    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if(!block){
                if (["KeyE", "KeyQ"].includes(e.code)) {
                    if (e.code === 'KeyQ') {
                        const index = categorys.indexOf(categorySelected);
                        if (index === 0) {
                            dispatch(setCategorySelected(categorys[categorys.length - 1]))
                        } else {
                            dispatch(setCategorySelected(categorys[index - 1]))
                        }
                        setBlock(true);
                        setTimeout(() => setBlock(false), 500)
                    }
                    if (e.code === 'KeyE') {
                        const index = categorys.indexOf(categorySelected);
                        if (index === categorys.length - 1) {
                            dispatch(setCategorySelected(categorys[0]))
                        } else {
                            dispatch(setCategorySelected(categorys[index + 1]))
                        }
                        setBlock(true);
                        setTimeout(() => setBlock(false), 500)
                    }
                }
            }
        }

        window.addEventListener("keydown", keyHandler)

        return () => window.removeEventListener("keydown", keyHandler)

    }, [block])

    return (
        <>
            {categorys.length > 0 && 
            <ContainerNavegation style={{
                opacity: categorys.length > 0 ? 1 : 0,
            }}> 
                <div className="arrows">
                    <Arrows />
                    <span>Q</span>
                </div>
                <div className="menus">
                    {categorys.map((item: string, index: number) => <Item key={index} item={item} onClick={handleSelected} actived={item == categorySelected} />)}
                </div>
                <div className="arrows">
                    <span>E</span>
                    <Arrows style={{
                        transform: 'rotate(180deg)'
                    }} />
                </div>
                <div className="fx-2" />

            </ContainerNavegation>}
        </>
    )
}

const Item = ({ item, actived, onClick }: any) => {
    return (
        <div className="item" onClick={() => onClick(item)}>
            <span
                style={{
                    color: actived && "#EFFC00"
                }}>
                {item}
            </span>
            <div className="fx" style={{
                opacity: actived ? 1 : 0,
                width: actived && "100%"
            }} />
        </div>
    )
}
export default Navegation