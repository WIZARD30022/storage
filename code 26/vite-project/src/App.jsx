import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(2)
  const [first, setFirst] = useState(0)
  // useEffect(() => {
  //   alert("welcome")
  // }, [])
  // useEffect(() => {
  //   alert("count changed")
  // }, [count])
  useEffect(() => {
    alert("first changed")
  }, [first])
  return (
    <>
      <Navbar color = "red"/>
      <div>
        The count is {count}
      </div>
      <button onClick={() => {setCount(count ** 2)}}>
        Update states
      </button>
    </>
  )
}

export default App
