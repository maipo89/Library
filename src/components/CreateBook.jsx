import React from "react"

function CreateBook(props) {
  
    return (
      <div className= "book">
        <h1>Book</h1>
        <p><strong>Title: </strong>{props.title}</p>
        <p><strong>Author: </strong>{props.author}</p>
      </div>
    )
  }
  
  export default CreateBook;