
import Chai from "./Chai"

function App() { 
  return (
    <>
      <Chai />
      <h1>React Js</h1>
   </>
  )
}

function Desc(){
  return (
    <p>
      React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.
      Its key feature is the ability to build components that manage their own state, which can be composed to create complex UIs.
    </p>
  )
}
export default App
export { Desc }
