import { useEffect, useState } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { fetchNui } from "../utils/fetchNui";
// import { useDispatch } from "react-redux";
import { formatToCurrency, isEnvBrowser } from "../utils/misc";
import Container, { Button } from "./styled";
import Header from "./tsx/Header";
import Navegation from "./tsx/Navegation";
import Content from "./Content";
import { PiggyBank } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setBank, setBankVisibility, setIp, useGlobal } from "../store/ReducerGlobal";

const App = () => {
    const { bank, showBank } = useSelector(useGlobal)
    const [visible, setVisible] = useState<boolean>(isEnvBrowser() ? true : false);
    const dispatch = useDispatch()

    useNuiEvent<boolean>('setVisible', setVisible)
    useNuiEvent('SET_BANK', (bank: any) => dispatch(setBank(bank)))
    useNuiEvent('SET_IP', (ip: string) => dispatch(setIp(ip)))
    useNuiEvent('TOOGLE_BANK', (ip: string) => dispatch(setBankVisibility(ip)))

    useEffect(() => {
        if (!visible) return;
        const keyHandler = (e: KeyboardEvent) => {
            if (["Escape"].includes(e.code)) {
                fetchNui("hideFrame")
            }
        }

        window.addEventListener("keydown", keyHandler)

        return () => window.removeEventListener("keydown", keyHandler)
    }, [visible])

    return (
        <div className="nui" style={{
            display: visible ? "flex" : "none"
        }}>
            <div className="fx-bg" />
            <Container style={{
                opacity: visible ? 1 : 0,
            }}>
                {showBank && <Button>
                    <PiggyBank className="center" absoluteStrokeWidth style={{
                        height: "1.2em",
                        width: "1em"
                    }} />
                    <span>{formatToCurrency(bank)}</span>
                </Button>}
                <Header />
                <Navegation />
                <Content />
            </Container>
        </div>
    );
};

export default App;