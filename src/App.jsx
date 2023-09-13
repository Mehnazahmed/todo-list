import { useState } from 'react';
import './App.css';
import CreateTodos from './CreateTodos';
import Todo from './Todo';

function App() {
  const [input,setInput] =useState("");
  const [todos,setTodos]=useState([]); 
  const [editTodos,setEditTodos]=useState(null); 


  return (
   <div className='container '>
    <div className='w-[500px]  mx-auto border-2 bg-slate-200 my-20 p-2'>
      <h3 className='text-2xl text-center bold mt-2'>Create Your Todo</h3>
    <div className='' >
    <CreateTodos
    input={input}
    setInput={setInput}
    todos={todos}
    setTodos={setTodos}
    editTodos={editTodos}
    setEditTodos={setEditTodos}
    ></CreateTodos>
   </div>
   <div className=''>
    <Todo
     todos={todos}
     setTodos={setTodos}
     editTodos={editTodos}
     setEditTodos={setEditTodos}
    ></Todo>
   </div>
   </div>
   </div>
  )
}

export default App
