//dependency imports
import React from "react";
import { useHistory } from "react-router-dom";

//styling imports
import "./NewNote.scss";

export default function NewNote() {
    //get history hook ready
    let history = useHistory();

    //set up state
    const [formName, setFormName] = React.useState("");
    const [formDesc, setFormDesc] = React.useState("");
    const [expand, setExpand] = React.useState(false);
    const [warning, setWarning] = React.useState(false);

    //on form submit
    const handleSubmit = (event)=> {
        event.preventDefault(); //do not refresh page
        
        //check if name has been filled in
        if(event.target.formName.value) {
            //if there is a name, proceed to gamenotepage with form inputs as props
            setWarning(false);
            console.log(history);
            history.push({pathname: "/gamenote", state: {name: formName, desc: formDesc}});
        } else {
            //if user tries to create a new note without a title, give a warning
            setWarning(true);
        }
        
    }

    const handleNewnoteClick = (event)=> {
        //depending on whether or not we had the window open it
        if(event.target.id==="1" || event.target.id==="2" || event.target.id==="3"){
            if(expand) {
                setExpand(false);
                setWarning(false);
            } else {
                setExpand(true);
                setWarning(false);
            }
        }
    }

    return (
        <div className={`newnote newnote__expand--${expand}`} id="1" onClick={handleNewnoteClick}>
            <div className={`newnote__title newnote__title--${expand}`} id="2">Create New Note</div>
            <form className={`newnote-form shown__${expand}`} id="3" onSubmit={handleSubmit}>
                <label htmlFor="formName">Note Name:</label>
                <input type="text" name={`formName`} maxLength="30" placeholder="Descriptive title (30 chars)" className={`newnote-form__field  newnote-form__field--${warning}`} value={formName} onChange={(e)=>setFormName(e.target.value)}/>
                {/* conditionally render a warning if user improperly tried to input the form */}
                {warning && <div className="warning__text">You must include a name for your note</div>}
                <label htmlFor="formDesc">Description:</label>
                <textarea name="formDesc" rows="5" maxLength="150" placeholder="Describe the note contents (150 chars)" className="newnote-form__field" value={formDesc} onChange={(e)=>setFormDesc(e.target.value)}></textarea>
                <input type="submit" value="Create" className="newnote-form__button"/>
            </form>
        </div>
    )

}