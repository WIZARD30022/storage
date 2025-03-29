import { useState, useEffect } from 'react'
import Navbar from './component/navbar'
import Footer from './component/footer'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const save = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i =>i.id === id);
    setTodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id
    });
    
    setTodos(newtodos);
    save()
  }

  const handleDelete = (e, id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id
    });
    
    setTodos(newtodos);
    save()
  }

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(),todo, iscompleted: false}])
    setTodo("")
    save()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].iscompleted = !newtodos[index].iscompleted;
    setTodos(newtodos);
    save()
  }

  return (
    <>
      <Navbar/>
      <div className="conyainer mx-auto my-3 rounded bg-violet-200 p-2 text-center min-h-[80vh]">
        <div className="addtodo">
          <h1 className='text-lg font-bold'>Add a todo</h1>
          <input onChange={handleChange} value={todo} type="text" className='rounded w-1/2 text-black' />
          <button onClick={handleAdd} className='bg-violet-700 rounded mx-2 p-2 py-0 font-bold text-white hover:bg-violet-800'>Add</button>
        </div>
        <h1 className='font-bold text-xl'>Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div>No Tasks to display</div>}
          {todos.map(item =>{
            return <div key={item.id} className="todo flex w-3/4  justify-between">
              <div className="flex gap-5">
              <input onChange={handleCheckbox} type="checkbox" value={item.iscompleted} name={item.id} id="" />
              <div className={item.iscompleted?"line-through":""}>{item.todo}</div></div>
              <div className="buttons flex h-full">
                <button onClick={(e) => {handleEdit(e, item.id)}} className='bg-violet-700 rounded mx-2 p-2 py-0 font-bold text-white hover:bg-violet-800'>Edit</button>
                <button onClick={(e) => {handleDelete(e, item.id)}} className='bg-violet-700 rounded mx-2 p-2 py-0 font-bold text-white hover:bg-violet-800'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
