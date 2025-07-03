import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  //let counter = 15

  const add = () => {
    if (counter < 20) {
      counter += 1
      setCounter(counter)
    }
    else{
      alert("Counter cannot be greater than 20")
    }
    
  }

  const remove = () => {
    if (counter > 0) {
      counter -= 1
      setCounter(counter)
      // return
    }
    else{
      alert("Counter cannot be less than 0")
    }
    
  }
  return (
    <>
      <h1>Counter in React</h1>
      <h2>Value: {counter}</h2>

      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      
    </>
  )
}

export default App
