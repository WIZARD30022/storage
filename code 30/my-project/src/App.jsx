import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleadd = () => {
    setTodos([...todos, {id : uuidv4(), todo, iscompleted: false}])
    setTodo("")
  }

  const handleedit = () => {
    
  }

  const handledelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
  }

  const handlechange = (e) => {
    setTodo(e.target.value)
  }

  const handlecheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.name
    console.log(`The id is ${id}`)
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos]
    newTodos[index].iscompleted = !newTodos[index].iscompleted
    setTodos(newTodos)
    console.log(newTodos, todos)
  }

  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[88.5vh]'>
        <div className='addtodo'>
          <h1 className='text-lg font-bold'>Add a todo</h1>
          <input onChange={handlechange(e)} value={todo} type="text" className='w-3/4' />
          <button onClick={handleadd} className='bg-violet-800 font-bold text-white p-1 rounded mx-1 hover:bg-blue-700 hover:text-black'>Add</button>
        </div>
        <h2 className='font-bold  text-lg'>Your Tasks</h2>
        <div className="todos">
          {todos.map(item=>{
            return <div key={item.id} className="todo flex w-full justify-between">
              <input onChange={handlecheckbox} type="checkbox" value={item.iscompleted} name={item.id} id='' />
            <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
            <div className="button">
              <button onClick={handleedit} className='bg-violet-800 font-bold text-white p-1 rounded mx-1 hover:bg-blue-700 hover:text-black'>Edit</button>
              <button onClick={(e) => {handledelete(e, item.id)}} className='bg-violet-800 font-bold text-white p-1 rounded mx-1 hover:bg-blue-700 hover:text-black'>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
