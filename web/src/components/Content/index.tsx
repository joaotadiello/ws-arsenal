import WeaponsList from "../WeaponsList"
import WeaponsSelected from "../WeaponsSelected"
import { Container } from "./styled"
import { useNuiEvent } from "../../hooks/useNuiEvent"
import { useDispatch, useSelector } from "react-redux"
import { setWeaponsList, useGlobal } from "../../store/ReducerGlobal"
import { debugData } from "../../utils/debugData"
import WeaponStats from "../WeaponStats"

debugData([
    {
        action: 'SET_WEAPON_LIST',
        data: [
            { name: "Assault Rifle AKM1",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:3,accuracy:4,range:3}},
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
    }
])

const Content = () => { 
    const dispatch = useDispatch()
    const {weapons} = useSelector(useGlobal) 

    useNuiEvent('SET_WEAPON_LIST', (data: any) => dispatch(setWeaponsList(data)))

    return (
        <Container style={{
            opacity: weapons.length > 0 ? 1 : 0,
        }}>
            <WeaponsList />
            <WeaponsSelected />
            <WeaponStats />
        </Container>
    )
}

export default Content