import React, { useState } from 'react'
import SectionArea from "./SectionArea"
import Fiction from "./Fiction"
import NonFiction from "./NonFiction"
import Magazines from "./Magazines"

function Sections(props) {
  const sections = ["Fiction", "Non-Fiction", "Magazines"]
  const [newValue, setNewValue] = useState([]);
  const [titleCategories, setTitleCategories] = useState("")
  console.log(titleCategories)

  function onChange(event) {
    const value = event.target.value
    setNewValue(newValue.indexOf(value) > -1 === false ? prevValue => {return [...prevValue, value]} : prevValue => {return [...prevValue]})
  }

  function clickFunction(event) {
    const value = event.target.value
    setNewValue(newValue.filter(e => e !== value)) 
  }

  function showCategories(event) {
    console.log(event.target.textContent)
    setTitleCategories(event.target.textContent)
  }

  return (
    <div>
        <hr />
        <div className="categories">
          <div>
            <h3>Choose your categories</h3>
            <div className="options-container">
              {sections.map((section, index) => {
                  return (<div className="options" key={index}>
                              <input onClick={clickFunction} onChange={onChange} type="checkbox" value={section}/>
                              <p>{section}</p>
                        </div>)
              })}
            </div>
          </div>
          <div className="section-area-container">
            <div className="title-area">
              {newValue.map((newSection) => {
                  return <SectionArea showCategories={showCategories} title={newSection}/>
              })}
            </div>
            { titleCategories === "Fiction" ? <Fiction /> : ( titleCategories === "Non-Fiction" ? <NonFiction /> : (titleCategories === "Magazines" ? <Magazines /> : null))}
          </div>
        </div>
     </div>

  )
}

export default Sections;
