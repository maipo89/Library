import React, {useState} from "react"

function SectionArea(props) {

   return (
       <div className="section-area">
           <h1 onClick={props.showCategories}>{props.title}</h1>
       </div>
   )
}

export default SectionArea;