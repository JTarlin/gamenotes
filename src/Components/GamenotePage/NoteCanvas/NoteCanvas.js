//dependency imports
import Graph from "react-graph-vis";
import {useState, useEffect} from "react";

//styling import
import "./NoteCanvas.scss";

export default function NoteCanvas(props) {
    console.log("canvas render");
    console.log("graph passed to notecanvas:", props.graph);

    const graph = props.graph;

    const setSelection = props.setSelection;
    let title = props.title;
    // let graph=props.graph;
    // const [graph, setGraph] = useState(props.graph);
    const [network, setNetwork] = useState(null); //start network as empty

    let options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: '#000000',
            arrows: {to: {enabled: false}, from:{enabled:false}}, //this one simply disables arrowheads on the graph edges

        },
        interaction: { hover: true }
    };

    useEffect(()=>{
        console.log("useeffect triggering to set the state of graph held in the state");
        if(network){
            network.setData(graph);
        }
    }, [graph])
     
    // console.log("logging selected nodes to check if network is working", network.getSelectedNodes());

    let events = {
        select: function(event) {
            var { nodes, edges } = event;
            console.log("selected something on the canvas");
            if (nodes.length === 1) {
                console.log("selected a node", nodes);
                setSelection({elementType: 2, id: nodes[0]});
            } else if(edges.length===1){
                console.log("selected an edge", edges);
                setSelection({elementType: 3, id: edges[0]});
            } else {
                console.log("selected blank canvas area");
                setSelection({elementType: 1, id: 1});
            }
        },
    };

    return (
        <div className="gamenote-canvas">
            <div className="canvasTitle">{title}</div>
            <div className="canvasContainer">
                {console.log("about to render the vis graph react element",graph)}
                <Graph
                    graph={graph}
                    options={options}
                    events={events}
                    getNetwork={network=>{setNetwork(network)}}
                />
            </div>
        </div>
    )

}