import React, { useState, forwardRef } from 'react'

const Child = (props,ref) => {
    const [name, setName] = useState();
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(Child);
