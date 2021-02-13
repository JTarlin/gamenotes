//dependency imports
import {useHistory} from "react-router-dom";
import {useState} from "react";

//component imports
import Header from "../Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";
import NoteCanvas from "./NoteCanvas/NoteCanvas";

//styling imports
import "./GamenotePage.scss";

export default function GamenotePage(props) {

    //get history state
    const history = useHistory();
    const [noteInfo, setNoteInfo] = useState(history.location.state);

    //gameenotepage holds all the info for the network graph
    const [graph, setGraph] = useState({nodes: [], edges: []})
    if(!graph.nodes[0]){
        console.log("empty");
        setGraph({
            nodes: [
                { id: 1, label: 'Node 1' },
                { id: 2, label: 'Node 2' },
                { id: 3, label: 'Node 3' },
                { id: 4, label: 'Node 4' },
                { id: 5, label: 'Node 5' }
            ],
            edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 4 },
                { from: 2, to: 5 }
            ]
        })
    }
    

    return (
        <div className="gamenotepage">
            <Header />
            <section className="gamenote">
                <NoteCanvas graph={graph} setNoteInfo={setNoteInfo} />
                <InfoBlock noteInfo={noteInfo}/>
            </section>
        </div>
    )
}