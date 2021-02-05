//styling import
import "./InfoBlock.scss";

export default function InfoBlock(props) {
    return (
        <div className="infoblock">
            <div className="infoblock__title">{props.noteInfo.name}</div>
            <div className="infoblock__description"></div>
        </div>
    )
}