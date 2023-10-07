import { useSelector } from "react-redux";
import Container from "./styled";
import { useGlobal } from "../../store/ReducerGlobal";
import IMAGE_TESTE from "../../assets/weapon-test.png"
import { formatToCurrency } from "../../utils/misc";
import { useEffect, useState } from "react";
import { fetchNui } from "../../utils/fetchNui";
import { Language } from "../../utils/lang";


const WeaponsSelected = () => {
    const [open, setOpen] = useState(false)
    const { selectedWeapon } = useSelector(useGlobal)

    function handleTakeWeapon() {
        fetchNui('take:weapon',selectedWeapon)
    }

    useEffect(() => {
        setOpen(false)
        setTimeout(() => setOpen(true), 500)
    }, [selectedWeapon])

    return (
        <Container image={IMAGE_TESTE} style={{
            backgroundSize:!open ? "0% 35%":"80% 35%",
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