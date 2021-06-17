import React, { useState } from 'react';
import NewBook from "./NewBook";
import CreateBook from "./CreateBook"

function Book() {

  const [books, setBooks] = useState([]);

  function addBook(newBook) {
      setBooks(prevBooks => {
        return [...prevBooks, newBook]
      })
  }

  return (

    <div>
      <NewBook addBook={addBook}/>
      <div className="create-book">
        {books.map((bookItem) => {
          return <CreateBook 
            title={bookItem.title}
            author={bookItem.author}
          />
        })}
      </div>
    </div>
  )
}

export default Book;
