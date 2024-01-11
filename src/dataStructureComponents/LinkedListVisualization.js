import React from 'react'
const LinkedListVisualization = ({ linkedNodes, currentNode }) => {
    return (
      <div>
        {linkedNodes.map((node, index) => (
          <div
            key={index}
            className={`linked-node ${currentNode === node ? 'current' : ''}`}
          >
            {node.value}
          </div>
        ))}
      </div>
    );
  };
  
  export default LinkedListVisualization;