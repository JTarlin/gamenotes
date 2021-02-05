//dependency imports
import {useHistory} from "react-router-dom";
import {useState} from "react";

//component imports
import Header from "../Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";

//styling imports
import "./GamenotePage.scss";

export default function GamenotePage(props) {

    //get history state
    const history = useHistory();
    const [noteInfo, setNoteInfo] = useState(history.location.state);

    return (
        <div className="gamenotepage">
            <Header />
            <section className="gamenote">
                <div className="gamenote-canvas"></div>
                <InfoBlock noteInfo={noteInfo}/>
            </section>
        </div>
    )
}