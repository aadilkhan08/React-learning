import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      alert('Counter is already at maximum')
    }
  }
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert('Counter is already at minimum')
    }
  }

  return (
    <>
      <h1>Just for fun</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Decrease value</button>
    </>
  )
}

export default App
