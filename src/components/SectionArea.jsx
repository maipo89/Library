import React from "react"
import Book from "./Book"

function SectionArea(props) {
   return (
       <div className="section-area">
           <h1>{props.title}</h1>
           <Book />
       </div>
   )
}

export default SectionArea;