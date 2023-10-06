import { useSelector } from "react-redux";
import { useGlobal } from "../../store/ReducerGlobal";
import Container from "./styled";

const WeaponStats = () => {
    const { selectedWeapon } = useSelector(useGlobal)

    return (
        <Container>
            <div className="card">
                <small>Tipo da arma</small>
                <span>{selectedWeapon.stats && selectedWeapon.stats.type}</span>
            </div>
            <div className="card">
                <small>Munições</small>
                <span><b>{selectedWeapon.stats && selectedWeapon.stats.ammo}</b>un</span>
            </div>
            <div className="card">
                <small>Dano</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: selectedWeapon.stats && selectedWeapon.stats.damage }).map((_, index) => <div key={index} className="progress progress-active" />)}
                    {selectedWeapon.stats && Array.from({ length: 5 - selectedWeapon.stats.damage }).map((_, index) => <div key={index} className="progress" />)}
                </section>
            </div>
            <div className="card">
                <small>Cadência de tiro</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: selectedWeapon.stats && selectedWeapon.stats.rateOfFire }).map((_, index) => <div  key={index} className="progress progress-active" />)}
                    {selectedWeapon.stats && Array.from({ length: 5 - selectedWeapon.stats.rateOfFire }).map((_, index) => <div key={index} className="progress" />)}
                </section>
            </div>
            <div className="card">
                <small>Precisão</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: selectedWeapon.stats.accuracy }).map((_, index) => <div key={index} className="progress progress-active" />)}
                    {selectedWeapon.stats && Array.from({ length: 5 - selectedWeapon.stats.accuracy }).map((_, index) => <div key={index} className="progress" />)}
                </section>
            </div>
            <div className="card">
                <small>Alcance</small>
                <section>
                    {selectedWeapon.stats && Array.from({ length: selectedWeapon.stats && selectedWeapon.stats.range }).map((_, index) => <div key={index} className="progress progress-active" />)}
                    {selectedWeapon.stats && Array.from({ length: 5 - selectedWeapon.stats.range }).map((_, index) => <div key={index} className="progress" />)}
                </section>
            </div>
        </Container>
    )
}

export default WeaponStats;