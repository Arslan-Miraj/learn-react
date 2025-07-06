import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "olive";
  }
  )

  useEffect(() => {
    return localStorage.setItem("color", color);
  }, [color])
  // console.log(color);
  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: color, height: '100vh', width: '100vw' }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded">
          <button
            className="outline-none px-4 py-2 rounded text-white"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded text-white"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded text-white"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>

          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-10 border border-gray-300 rounded-4xl"
          />

          <p className="mt-2 w-full text-center font-semibold">
            Selected Color: <span style={{ color }}>{color}</span>
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default App
