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
        //on change of graph data, update network to show this data
        if(network){
            network.setData(graph);
        }
    }, [graph])
    

    let events = {
        select: function(event) {
            var { nodes, edges } = event;

            if (nodes.length === 1) {
                console.log("we have just selected node#", nodes);
                //selected a node
                setSelection({elementType: 2, id: nodes[0]});
            } else if(edges.length===1){
                //selected an edge
                setSelection({elementType: 3, id: edges[0]});
            } else {
                //selected blank canvas area
                setSelection({elementType: 1, id: 1});
            }
        },
    };

    return (
        <div className="gamenote-canvas">
            <div className="canvasTitle">{title}</div>
            <div className="canvasContainer">
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