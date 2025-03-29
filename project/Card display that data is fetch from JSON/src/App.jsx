import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counts, setCount] = useState([])

  const fatchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    console.log(data)
    setCount(data)
  }

  useEffect(() => {
    fatchdata()
  },[])
  
  
// const Count = ({count}) => {
//   return (<>
//       <div>
//         <div>{count.id}</div>
//         <div>{count.userId}</div>
//         <div>{count.title}</div>
//         <div>{count.body}</div>
//       </div>
//     </>
//   );
// };

  return (
    <>
      
    </>
  )
}

export default App
