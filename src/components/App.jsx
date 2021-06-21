import React, { useState } from 'react';
import Sections from "./Sections"
import Header from "./Header"

function App() {

  const [isClicked, setIsClicked] = useState(false);

  function showSection() {
        setIsClicked(true);
  }

  return (

    <div>
      <Header />
      <div className="container-button">
        <div>
          <h3>Create a New Library</h3>
          <button className="library-button btn btn-primary btn-lg" onClick={showSection}>New Library</button>
        </div>
      </div>
      { isClicked ? <Sections /> : null}
    </div>
  )
}

export default App;