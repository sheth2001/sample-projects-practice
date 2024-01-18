import React from 'react'

const Child = ({name, parentAlert}) => {
  return (
    <div>
      <h2>Child component: {name}</h2>
      <button onClick={() => parentAlert("child name")}>click me</button>
    </div>
  )
}

export default Child
