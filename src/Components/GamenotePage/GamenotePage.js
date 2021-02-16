//dependency imports
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

//component imports
import Header from "../Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";
import NoteCanvas from "./NoteCanvas/NoteCanvas";

//styling imports
import "./GamenotePage.scss";

export default function GamenotePage(props) {
    //get history hook
    const history = useHistory();

    //make the page robust to loads from direct url
    let tempNoteInfo;
    if(history.location.state) {
        tempNoteInfo = history.location.state;
    } else {
        //eventually we might want to load this in from recently closed notes
        tempNoteInfo = {desc: "", name: "Untitled Note"};
    }
    //state variable noteInfo stores the name and desc of the note
    const [noteInfo, setNoteInfo] = useState(tempNoteInfo);
    //track what element is currently selected - set by canvas mouse events
    const [selection, setSelection] = useState({elementType:1, id:1}); //where type 1 is note, 2 is node, 3 is edge
    //tracks the note info on the current selected element (note by default)
    const [selectionInfo, setSelectionInfo] = useState(tempNoteInfo);

    //gameenotepage holds all the info for the network graph
    const [graph, setGraph] = useState({nodes: [], edges: []})
    if(!graph.nodes[0]){ //if there are NO nodes, set a default network
        console.log("empty");
        setGraph({
            nodes: [
                { id: 1, label: 'Node 1', desc: "The first node" },
                { id: 2, label: 'Node 2', desc: "The second node" },
                { id: 3, label: 'Node 3', desc: "The third node" },
                { id: 4, label: 'Node 4', desc: "The fourth node" },
                { id: 5, label: 'Node 5', desc: "The fifth node" }
            ],
            edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 4 },
                { from: 2, to: 5 }
            ]
        })
    }

    //this function adds a new node to the graph data
    const addNode = (nodeName)=> {
        let currentNodes = graph.nodes;
        let nodeCount = currentNodes.length;
        const newNode = {id: nodeCount, label: nodeName}
        let newNodes = currentNodes.push(newNode);
        setGraph({...graph, nodes: newNodes})
    }
    
    useEffect(()=>{
        console.log("logging the selection in gamenotepage: ",selection);
        if(selection.elementType===1){//if the canvas was selected
            setSelectionInfo(noteInfo);
        } else if(selection.elementType===2){ //if we selected a node
            setSelectionInfo({name: graph.nodes[selection.id-1].label, desc: graph.nodes[selection.id-1].desc})
        }// else if(selection.elementType===3){
        //     setSelectionInfo({name: graph.nodes[selection.id].label, desc: graph.nodes[selection.id].desc})
        // }
    }, [selection])

    return (
        <div className="gamenotepage">
            <Header />
            <section className="gamenote">
                <NoteCanvas graph={graph} setSelection={setSelection}/>
                <InfoBlock selectionInfo={selectionInfo}/>
            </section>
        </div>
    )
}