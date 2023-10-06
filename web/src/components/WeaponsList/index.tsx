import { useState } from "react";
import Container from "./styled";
import { CardList } from "./types";
import { Arrows } from "../../assets/icon";
import { useSelector } from "react-redux";
import { setSeletedWeapon, useGlobal } from "../../store/ReducerGlobal";
import { useDispatch } from "react-redux";


const Card = ({ name, selected, ...rest }: CardList) => {
    return (
        <div
            className="card"
            onClick={rest.onClick}
            style={{
                borderColor: selected ? '#FFF205' : ''
            }}>
            <Arrows fill='#FFF205' opacity="1" style={{
                transform: 'rotate(180deg)',
                opacity: selected ? 1 : 0
            }} />
            <span style={{
                color: selected ? '#FFF205' : 'rgba(255, 255, 255, 0.25)'
            }}>{name}</span>
        </div>
    )
}

const WeaponsList = () => {
    const { weapons,categorySelected } = useSelector(useGlobal)
    const dispatch = useDispatch()

    const [selected, setSelected] = useState(0)

    const handleSelect = (id: number,data:any) => {
        setSelected(id)
        dispatch(setSeletedWeapon(data))
    }

    return (
        <Container>
            {weapons.map((v: any, index: number) => <Card
                key={index}
                name={v.name}
                onClick={() => handleSelect(index,v)}
                selected={selected == index}
            />)}
        </Container>
    )
}

export default WeaponsList