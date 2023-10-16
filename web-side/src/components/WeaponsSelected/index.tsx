import { useDispatch, useSelector } from "react-redux";
import Container from "./styled";
import { setBank, useGlobal } from "../../store/ReducerGlobal";
import { formatToCurrency } from "../../utils/misc";
import { useEffect, useState } from "react";
import { fetchNui } from "../../utils/fetchNui";
import { Language } from "../../utils/lang";


const WeaponsSelected = () => {
    const [open, setOpen] = useState(false)
    const { selectedWeapon, ip } = useSelector(useGlobal)
    const dispatch = useDispatch()

    function handleTakeWeapon() {
        fetchNui('take:weapon', selectedWeapon)
            .then(result => {
                dispatch(setBank(result))
            })
    }

    useEffect(() => {
        setOpen(false)
        setTimeout(() => setOpen(true), 500)
    }, [selectedWeapon])

    console.log(ip + selectedWeapon.image + '.png')

    return (
        <Container image={ip + selectedWeapon.image + '.png'} style={{
            backgroundSize: !open ? "0% 35%" : "80% 35%",
        }}>
            <div className="weapon-name center">
                <div className="weapon-name-fx" />
                <span>{selectedWeapon.name}</span>
            </div>
            <section>
                <span>{Language().price}: <b>{formatToCurrency(selectedWeapon.price)}</b></span>
                <button onClick={handleTakeWeapon}>{Language().takeWeapon}</button>
            </section>
        </Container>
    )
}

export default WeaponsSelected;