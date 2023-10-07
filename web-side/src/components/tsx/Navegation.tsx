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

const dataFake = [
    { name: "Assault Rifle AKM111111",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:3,accuracy:4,range:3}},
    { name: "Assault Rifle AKM2",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:2,rateOfFire:3,accuracy:4,range:3}},
    { name: "Assault Rifle AKM3",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:1,accuracy:4,range:4}},
    { name: "Assault Rifle AKM4",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:2,rateOfFire:3,accuracy:1,range:3}},
    { name: "Assault Rifle AKM5",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:3,accuracy:4,range:3}},
    { name: "Assault Rifle AKM6",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:3,rateOfFire:3,accuracy:4,range:3}},
    { name: "Assault Rifle AKM7",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:5,rateOfFire:3,accuracy:1,range:5}},
    { name: "Assault Rifle AKM8",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:1,rateOfFire:5,accuracy:1,range:3}},
    { name: "Assault Rifle AKM9",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:5,rateOfFire:3,accuracy:4,range:3}},
    { name: "Assault Rifle AKM10",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:1,rateOfFire:3,accuracy:4,range:3}},
    { name: "Assault Rifle AKM11",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:3,rateOfFire:5,accuracy:3,range:3}},
    { name: "Assault Rifle AKM12",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:3,rateOfFire:3,accuracy:4,range:3}},
]

const Navegation = () => {
    const [block, setBlock] = useState<boolean>(false);
    const { categorys, categorySelected } = useSelector(useGlobal);

    const dispatch = useDispatch()

    const handleSelected = (item: string) => {
        dispatch(setCategorySelected(item))
    }

    useNuiEvent('SET_CATEGORYS', (data: any) => dispatch(setCategorys(data)))

    useEffect(() => {
        fetchNui('armory:changeCategory', categorySelected)
        .then(result => {
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
                        setTimeout(() => setBlock(false), 250)
                    }
                    if (e.code === 'KeyE') {
                        const index = categorys.indexOf(categorySelected);
                        if (index === categorys.length - 1) {
                            dispatch(setCategorySelected(categorys[0]))
                        } else {
                            dispatch(setCategorySelected(categorys[index + 1]))
                        }
                        setBlock(true);
                        setTimeout(() => setBlock(false), 250)
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