import React, { useState } from 'react'

const HideShowModule = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
      {
        show? <h1>Hello world</h1>:null
      }
      <button onClick={() => setShow(true)}>show</button>
      <button onClick={() => setShow(false)}>hide</button>
    </div>
  )
}

export default HideShowModule
