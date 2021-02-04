//dependency imports
import {Link} from "react-router-dom";

//styling imports
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__title">GameNotes</Link>
            </div>
        </header>
    )
}