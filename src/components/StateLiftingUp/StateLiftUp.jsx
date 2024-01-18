import React, { useState } from 'react'
import Child from './Child'

const StateLiftUp = () => {

  const [name, setName] = useState('kushal');
  const parentAlert = (newName) => {
    setName(newName);
    alert('alerting from parent component');
  }
  return (
    <div>
      <h2>state lifting up</h2>
      <Child name = {name} parentAlert = {parentAlert} />
    </div>
  )
}

export default StateLiftUp
