import React, { useState } from "react"

function NewBook(props) {
    const [book, setBook] = useState({title: "", author: ""});
    
    function handleChange(event) {
        const {value, name} = event.target;
        setBook(prevValue => {
            return {...prevValue, [name]: value}
        })
    }

    function createBook(event) {
        event.preventDefault();
        props.addBook(book)
    }
  
    return (
      <div className="books-container">
        <div>
          <div class="input-group input-group-sm mb-3">
              <input
                placeholder="Book Title"
                onChange={handleChange}
                name="title"
                type="text"
                class="form-control" aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm"
                value={book.title}
              />
          </div>
          <div class="input-group input-group-sm mb-3">
            <input
            onChange={handleChange}
            name="author"
            placeholder="Book Author"
            class="form-control" aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-sm"
            value={book.author}
            />
          </div>
        </div>
        <button class="btn btn-primary" onClick={createBook}>Create Book</button>
      </div>
    )
  }
  
  export default NewBook;
  