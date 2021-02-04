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
                    <div className="welcomepage__button">Build as Guest</div>
                    <div className="welcomepage__button">Account Login</div>
                </div>
            </div>       
        </div>
        
    )
}