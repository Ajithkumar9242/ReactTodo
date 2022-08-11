import React , {useState} from 'react'
import './App.css';


function App() {
  let [list,setList] = useState([])
  let [input,setInput] = useState("")

  const adddTodo = (todo) =>{
    const newTodo = {
      id : Math.random(),
      todo: todo,
    }

  setList([...list,newTodo])

  setInput("")

  }


  let deleteItem = (id) =>{
    let newList = list.filter((todo) => todo.id !== id)

    setList(newList)
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input 
      type="text" 
      value={input}
      onChange = {(e) => setInput(e.target.value) } />

    <button onClick={() => adddTodo(input)}>ADD</button>
   
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
        {todo.todo}
        <button onClick={() => deleteItem(todo.id)} className="btn">&times;</button>
        
        </li>

      ))}
      
    </ul>
    </div>
    
    )
  }
  
  export default App