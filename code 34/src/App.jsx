import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = Array(30_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagicl: i===29_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  count [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(items => items.isMagical === true)  Expensive computing

  const magical = useMemo(() => numbers.find(items => items.isMagical === true), [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
