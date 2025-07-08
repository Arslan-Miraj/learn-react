import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "{}()[]`~!@#$%^&*/-+_="

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) 
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <h1>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-4 my-8 text-orange-500 bg-gray'>
        Test
        <h1 className='text-green-300'>Hello</h1>
      </div>
    </>
  )
}

export default App
