import React from 'react'
import './loader.css'

export const Loading = () => {
  return (
    <div style={{style: "margin:0"}} >
      <div id="loader"></div>
      <div style={{style: "display:none"}}  id="myDiv" className="animate-bottom">
      </div>
    </div>
  )
}
