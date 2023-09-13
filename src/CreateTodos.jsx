import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTodos = ({input,setInput,todos,setTodos,editTodos,setEditTodos}) => {
    const updateTodo =(title,id,completed)=>{
        const newTodo = todos.map((todo)=>{
            todo.id === id? {title,id,completed} : todo
        })
        setTodos(newTodo)
        setEditTodos('')
    }
    const addText =e=>{
        const text=e.target.value;
        setInput(text)
        console.log(text)
    }
    const handleTodo =(e)=>{
       e.preventDefault();
       if(!editTodos){

           setTodos([...todos,{id: uuidv4(),title:input ,completed:false}])
           setInput(' ');
       }else{
        updateTodo(input,editTodos.id.editTodos.completed)
       }

    }
    return (
        <form onSubmit={handleTodo} className='flex p-10'>
            <input onChange={addText} 
            type="text" 
            value={input} 
            required 
            placeholder="type your todo....."
            className="input input-bordered input-primary w-full max-w-xs" />
            <button  className="btn btn-primary ms-2" type='submit'>Add</button>

           
            
        </form>
    );
};

export default CreateTodos;