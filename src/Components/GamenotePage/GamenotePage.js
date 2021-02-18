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
        let highestNode = currentNodes[currentNodes.length-1].id;
        let newNode;
        if(nodeName){
            newNode = {id: highestNode+1, label: nodeName, desc: "Newly spawned node"};
        } else {
            newNode = {id: highestNode+1, label: "Node "+(highestNode+1), desc: "Newly spawned node"};
        }
       
        currentNodes.push(newNode);
        setGraph({...graph, nodes: currentNodes});
    }

    const deleteNode = (nodeId)=>{
        let currentNodes = graph.nodes;
        //delete the node with nodeID given
        for(let i=0; i<currentNodes.length; i++){
            if(currentNodes[i].id===nodeId){
                currentNodes.splice(i, 1);
                break;
            }
        }
        //next, go through and delete all edges referring to that node
        let currentEdges = graph.edges;
        for(let i=graph.edges.length-1;i>=0;i--){
            if(graph.edges[i].from===nodeId || graph.edges[i].to===nodeId){
                currentEdges.splice(i, 1);
            }
        }
        setGraph({edges: currentEdges, nodes: currentNodes});
        //we can no longer have this ndoe selected, because we have deleted it - select canvas instead
        setSelection({elementType: 1, id:1});
    }
    
    useEffect(()=>{
        if(selection.elementType===1){//if the canvas was selected
            setSelectionInfo(noteInfo);
        } else if(selection.elementType===2){ //if we selected a node
            //because nodes can be added and deleted, we need to find the current position in the array of the selected node
            let arrayPos;
            for(let i=0;i<graph.nodes.length;i++){
                if(graph.nodes[i].id===selection.id){
                    arrayPos = i;
                    break;
                }
            }
            console.log("arrayPos is:",arrayPos);
            setSelectionInfo({name: graph.nodes[arrayPos].label, desc: graph.nodes[arrayPos].desc})
        }// else if(selection.elementType===3){
        //     setSelectionInfo({name: graph.nodes[selection.id].label, desc: graph.nodes[selection.id].desc})
        // }
    }, [selection, noteInfo, graph.nodes])

    return (
        <div className="gamenotepage">
            <Header />
            <section className="gamenote">
                <NoteCanvas title={noteInfo.name} graph={graph} setSelection={setSelection}/>
                <InfoBlock selectionInfo={selectionInfo} selection={selection} addNode={addNode} deleteNode={deleteNode}/>
            </section>
        </div>
    )
}