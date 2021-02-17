//dependency imprts
import useState from "react";

export default function InlineEdit() {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue]=useState("");
    return(
        <span className="inline-text_copy inline-text_copy--active">
            {props.text}
            <input className="inline-text_input inline-text_input--rest" />
        </span>
    )
}