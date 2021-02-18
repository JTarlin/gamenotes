//styling import
import "./InfoBlock.scss";

//component import
import InlineEdit from "../../InlineEdit/InlineEdit";

export default function InfoBlock(props) {
    console.log("re-rendering info block, here is the info on the new selection:", props.selectionInfo );
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
            <InlineEdit text={"test inline edit"} />
        </div>
    )
}