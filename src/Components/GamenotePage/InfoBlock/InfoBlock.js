//styling import
import "./InfoBlock.scss";

export default function InfoBlock(props) {
    const selectedType=props.selection.elementType;
    const selectedId = props.selection.id;
    const addNode = props.addNode;
    const deleteNode = props.deleteNode;

    return (
        <div className="infoblock">
            <div className="infoblock__title">{props.selectionInfo.name}</div>
            <div className="infoblock__description">{props.selectionInfo.desc}</div>
            {selectedType===1 && 
            <div className="infoblock__button" onClick={()=>{addNode(null)}}>
                Add New Node
            </div>}
            {selectedType===2 && 
            <div className="infoblock__button" onClick={()=>{deleteNode(selectedId)}}>
                Delete Node
            </div>}
        </div>
    )
}