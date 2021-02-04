//dependency imports
import {Link} from "react-router-dom";

//styling imports
import "./WelcomePage.scss";

export default function WelcomePage() {

    return (
        <div className="welcomepage">
            <div className="welcomepage__bg"></div>
            <div className="welcomepage__content">
                <div className="welcomepage__title">
                    GameNotes
                </div>
                <div className="welcomepage__buttons">
                    <Link to="/dashboard" className="welcomepage__button">Build as Guest</Link>
                    <div className="welcomepage__button">Account Login</div>
                </div>
            </div>       
        </div>
        
    )
}