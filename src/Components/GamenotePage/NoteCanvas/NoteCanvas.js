//dependency imports
import Graph from "vis-react";

//styling import
import "./NoteCanvas.scss";

export default function NoteCanvas(props) {
    console.log("canvas render");
    console.log("graph passed to notecanvas:", props.graph);

    const setSelection = props.setSelection;

    let graph = props.graph;
    let title = props.title;

    let options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: '#000000',
            arrows: {to: {enabled: false}, from:{enabled:false}}, //this one simply disables arrowheads on the graph edges

        },
        interaction: { hoverEdges: true }
    };
     
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
                />
            </div>
        </div>
    )

}