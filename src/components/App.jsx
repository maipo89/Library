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
        <button className="library-button btn btn-primary btn-lg" onClick={showSection}>New Library</button>
      </div>
      { isClicked ? <Sections /> : null}
    </div>
  )
}

export default App;