//dependency imports
import React from "react";

//styling imports
import "./NewNote.scss";

class NewNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {formName: "", formText: "", expand: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //control the form components
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    
    //on form submit
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.formName);
        event.preventDefault();
    }

    handleNewnoteClick = (event)=> {
        //depending on whether or not we had the window open it
        if(event.target.id==="1" || event.target.id==="2" || event.target.id==="3"){
            if(this.state.expand) {
                this.setState({expand: false});
            } else {
                this.setState({expand: true});
            }
        }
    }

    render() {
        return (
            <div className={`newnote newnote__expand--${this.state.expand}`} id="1" onClick={this.handleNewnoteClick}>
                <div className={`newnote__title newnote__title--${this.state.expand}`} id="2">Create New Note</div>
                <form className={`newnote-form shown__${this.state.expand}`} id="3" onSubmit={this.handleSubmit}>
                    <label htmlFor="formName">Note Name:</label>
                    <input type="text" name="formName" maxLength="30" placeholder="Descriptive title (30 chars)" className="newnote-form__field" value={this.state.formName} onChange={this.handleChange}/>
                    <label htmlFor="formDesc">Description:</label>
                    <textarea name="formDesc" rows="5" maxLength="150" placeholder="Describe the note contents (150 chars)" className="newnote-form__field" value={this.state.formDesc} onChange={this.handleChange}></textarea>
                    <input type="submit" value="Create" className="newnote-form__button"/>
                </form>
            </div>
        )
    }
}

export default NewNote;