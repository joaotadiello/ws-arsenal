import { useSelector } from "react-redux";
import { useGlobal } from "../../store/ReducerGlobal";
import Container from "./styled";
import { useEffect, useState } from "react";
import { Language } from "../../utils/lang";

const WeaponStats = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { selectedWeapon } = useSelector(useGlobal)

    useEffect(() => {
        setTimeout(() => setLoading(true), 500)
    }, [selectedWeapon])

    return (
        <Container>
            <div className="card">
                <small>{Language().weaponType}</small>
                <span>{selectedWeapon.stats && selectedWeapon.stats.type}</span>
            </div>
            <div className="card">
                <small>Munições</small>
                <span><b>{selectedWeapon.stats && selectedWeapon.stats.ammo}</b>un</span>
            </div>
            <div className="card">
                <small>{Language().damage}</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: 5 }).map((_, index) => <div key={index} className="progress" style={{
                        backgroundColor: selectedWeapon.stats && selectedWeapon.stats.damage > index && loading ? "#FFF205" : "rgba(255, 255, 255, 0.15)"
                    }} />)}
                </section>
            </div>
            <div className="card">
                <small>{Language().fireRate}</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: 5 }).map((_, index) => <div key={index} className="progress" style={{
                        backgroundColor: selectedWeapon.stats && selectedWeapon.stats.rateOfFire > index && loading ? "#FFF205" : "rgba(255, 255, 255, 0.15)"
                    }} />)}
                </section>
            </div>
            <div className="card">
                <small>{Language().accuracy}</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: 5 }).map((_, index) => <div key={index} className="progress" style={{
                        backgroundColor: selectedWeapon.stats && selectedWeapon.stats.accuracy > index && loading ? "#FFF205" : "rgba(255, 255, 255, 0.15)"
                    }}/>)}
                </section>
            </div>
            <div className="card">
                <small>{Language().range}</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: 5 }).map((_, index) => <div key={index} className="progress" style={{
                        backgroundColor: selectedWeapon.stats && selectedWeapon.stats.range > index && loading ? "#FFF205" : "rgba(255, 255, 255, 0.15)"
                    }}/>)}
                </section>
            </div>
        </Container>
    )
}

export default WeaponStats;