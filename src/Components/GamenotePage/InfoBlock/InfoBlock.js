//styling import
import "./InfoBlock.scss";

//component import
import InlineEdit from "../../InlineEdit/InlineEdit";
import TextareaEdit from "../../InlineEdit/TextareaEdit";

export default function InfoBlock(props) {
    const selectedType=props.selection.elementType;
    const selectedId = props.selection.id;
    const {addNode, deleteNode, updateInfo} = props;

    return (
        <div className="infoblock">
            <div className="infoblock__title">
                <InlineEdit text={props.selectionInfo.name} selection={props.selection} updateInfo={updateInfo}/>
            </div>
            <div className="infoblock__description">
                <TextareaEdit text={props.selectionInfo.desc} selection={props.selection} updateInfo={updateInfo}/>
            </div>
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