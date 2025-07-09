import { useState, useCallback, useEffect } from 'react'
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

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  } , [numAllowed, charAllowed, length, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl py-8 px-6 my-12 bg-gray-900 text-white space-y-6">
  
  {/* Password Display */}
  <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden shadow-inner">
    <input
      type="text"
      value={password}
      readOnly
      placeholder="Your password will appear here"
      className="flex-1 bg-gray-800 text-white px-4 py-3 outline-none placeholder-gray-500"
    />
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition-all duration-200">
      Copy
    </button>
  </div>

  {/* Password Length */}
  <div>
    <div className="flex justify-between items-center mb-2">
      <label className="text-sm font-medium text-gray-300">Password Length</label>
      <span className="text-sm font-semibold text-orange-400">{length}</span>
    </div>
    <input
      type="range"
      min={8}
      max={29}
      value={length}
      onChange={(e) => setLength(e.target.value)}
      className="w-full h-2 appearance-none bg-gray-700 rounded-lg cursor-pointer accent-orange-500"
    />
  </div>

  {/* Options */}
  <div className="grid grid-cols-2 gap-4">
    <label className="flex items-center gap-2">
      <input 
      type="checkbox"
      defaultChecked={charAllowed} 
      id='numInput'
      onChange={() => { setCharAllowed((prev) => !prev)}}
      className="accent-orange-500 w-5 h-5" />
      <span className="text-sm">Include Symbols</span>
    </label>
    <label className="flex items-center gap-2">
      <input 
      type="checkbox" 
      className="accent-orange-500 w-5 h-5"
      defaultChecked={numAllowed} 
      id='charInput'
      onChange={() => { setNumAllowed((prev) => !prev)}}
       />
      <span className="text-sm">Include Numbers</span>
    </label>
  </div>
</div>


      

    </>
  )
}

export default App
