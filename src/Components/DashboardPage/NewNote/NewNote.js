//dependency imports
import React from "react";

//styling imports
import "./NewNote.scss";

class NewNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {formName: "", formText: ""};
    
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
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.formName);
        event.preventDefault();
    }

    render() {
        return (
            <section className="newnote">
                <div className="newnote__title">Create New Note</div>
                <form className="newnote-form" onSubmit={this.handleSubmit}>
                    <label for="formName">Note Name:</label>
                    <input type="text" name="formName" value={this.state.formName} onChange={this.handleChange}/>
                    <label for="formDesc">Description:</label>
                    <textarea name="formDesc" value={this.state.formDesc} onChange={this.handleChange}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </section>
        )
    }
}

export default NewNote;