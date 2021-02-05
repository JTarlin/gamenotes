//component imports
import Header from "../Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";

//styling imports
import "./GamenotePage.scss";

export default function GamenotePage(props) {


    return (
        <div className="gamenotepage">
            <Header />
            <section className="gamenote">
                <div className="gamenote-canvas"></div>
                <InfoBlock/>
            </section>
        </div>
    )
}