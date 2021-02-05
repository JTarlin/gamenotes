//dependency imports
import Graph from "vis-react";

//styling import
import "./NoteCanvas.scss";

export default function NoteCanvas() {
    let graph = {
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
    }

    let options = {
        layout: {
            hierarchical: true
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
        <Graph 
            graph={graph}
            options={options}
            events={events}
        />
        </div>
    )

}