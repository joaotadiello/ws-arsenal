import { useState } from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { debugData } from "./debugData"

debugData([
    {
        action: 'SET_LANGUAGE',
        data: {
            takeWeapon: 'Retirar',
            price: 'Preço',
            ammoText: 'Munições',
            damage: 'Dano',
            fireRate: 'Cadência de tiro',
            accuracy: 'Precisão',
            range: 'Alcance',
            weaponType: 'Tipo de Arma',
        }
    },
])

export const Language = () => {
    const [lang, setLang] = useState({
        takeWeapon: 'Retirar',
        price: 'Preço',
        ammoText: 'Munições',
        damage: 'Dano',
        fireRate: 'Cadência de tiro',
        accuracy: 'Precisão',
        range: 'Alcance',
        weaponType: 'Tipo de Arma',
    })

    useNuiEvent('SET_LANGUAGE', setLang)

    return lang
}