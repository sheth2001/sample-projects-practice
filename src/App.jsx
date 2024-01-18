import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HideShowModule from './components/HideShowModule'
import StateLiftUp from './components/StateLiftingUp/StateLiftUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HideShowModule /> */}
      <StateLiftUp />
    </>
  )
}

export default App
