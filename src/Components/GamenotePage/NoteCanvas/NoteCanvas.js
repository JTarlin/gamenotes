//dependency imports
import Graph from "vis-react";

//styling import
import "./NoteCanvas.scss";

export default function NoteCanvas(props) {
    let graph = props.graph;

    let options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: '#000000'
        },
        interaction: { hoverEdges: true }
    };
     
    let events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };

    return (
        <div className="gamenote-canvas">
            <div className="canvasTitle">Canvas Title</div>
            <div className="canvasContainer">
                <Graph 
                    graph={graph}
                    options={options}
                    events={events}
                />
            </div>
        </div>
    )

}