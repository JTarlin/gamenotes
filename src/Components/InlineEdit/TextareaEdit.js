//dependency imprts
import {useState, createRef, useEffect} from "react";
import useOnClickOutside from "../Hooks/useOnClickOutside/useOnClickOutside";
import TextareaAutosize from 'react-textarea-autosize';

//import styling
import "../InlineEdit/InlineEdit.scss";

export default function TextareaEdit(props) {
    const {text, selection, updateInfo} = props;
    //tracks if we are currently editing or not
    const [editing, setEditing] = useState(false);
    //tracks the current text value
    const [inputValue, setInputValue] = useState(text);
    //this ref tracks the editing box
    const editingBoxRef = createRef();

    //this one runs if we click outside of the editing box
    useOnClickOutside(editingBoxRef, ()=>{
        if(editing){
            toggleEditing();
            //we are editing the desc property
            updateInfo(selection.elementType, selection.id, null, inputValue);

        }
    })

    const handleChange = (event)=>{
        //when a new character is typed into the box save it to state
        setInputValue(event.target.value);
    }

    const toggleEditing = ()=>{
        //change editing mode to true
        setEditing(!editing);
    }

    const checkForSubmit = (event)=>{
        if(event.key==="Escape"){
            toggleEditing();
            //we are editing the desc property
            updateInfo(selection.elementType, selection.id, null, inputValue);
        }
    }

    useEffect(()=>{setInputValue(text)}, [text]);

    return(
        <>
            {editing
             //if we are editing display the input box
            ? <TextareaAutosize value={inputValue} onChange={handleChange} onKeyDown={checkForSubmit} maxRows={10} ref={editingBoxRef} className="inline-edit__input"/>
            //if we are not editing simply display the span
            : <span onClick={toggleEditing} className="inline-edit__text--body">{inputValue}</span>
            }
        </>
    )
}