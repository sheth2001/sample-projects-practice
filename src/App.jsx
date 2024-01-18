import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HideShowModule from './components/HideShowModule'
import StateLiftUp from './components/StateLiftingUp/StateLiftUp'
import UseMemo from './components/UseMemo'
import UseRef from './components/UseRef'
import HOC from './components/HOC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HideShowModule /> */}
      {/* <StateLiftUp /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      <HOC />
    </>
  )
}

export default App
