import React from 'react'
import ReactDOM from 'react-dom';


function PortalsDemo() {
  return ReactDOM.createPortal(
    <div>
      <h3>PortALS DEMO</h3>
    </div>,
    document.getElementById("Portalroot")
  )
}

export default PortalsDemo
