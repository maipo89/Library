import React, { useState } from 'react'
import SectionArea from "./SectionArea"

function Sections(props) {
  const sections = ["Fiction", "Non-Fiction", "Magazines"]
  const [newValue, setNewValue] = useState([]);
  console.log(newValue)

  function onChange(event) {
    const value = event.target.value
    setNewValue(newValue.indexOf(value) > -1 === false ? prevValue => {return [...prevValue, value]} : prevValue => {return [...prevValue]}) 
  }

  return (
    <div>
        <hr />
        <div className="options-container">
          {sections.map((section, index) => {
              return (<div className="options" key={index}>
                          <input onClick={props.clickFunction} onChange={onChange} type="checkbox" value={section}/>
                          <p>{section}</p>
                    </div>)
          })}
        </div>
        <div className="section-area-container">
        {newValue.map((newSection) => {
            return <SectionArea title={newSection}/>
        })}
        </div>
     </div>

  )
}

export default Sections;
