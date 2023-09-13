import { FaCheckCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
const Todo = ({ todos, setTodos ,setEditTodos}) => {
const handleComplete =(todo)=>{
    setTodos(
        todos.map((item)=>{
            if(item.id === todo.id){
                return {...item,  completed: !item.completed}
            }
                return item;
            
        })
    )
}

    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }
    const handleEdit=({id})=>{
        console.log(id)
      const findTodo =todos.find((todo)=> todo.id ===id);
      setEditTodos(findTodo)
    }
  return (
    <div className="ms-10 ">
      {todos.map((todo, index) => (
        <li className="flex p-1 w-[400px] rounded-xl border-2 mt-2 border-slate-400 flex items-center bg-slate-100 ">
          <a className="p-2">{index + 1}.</a>
          <input 
           className="bg-slate-100"
            type="text"
            value={todo.title}
            
            
          />

          <div className="flex ms-20">
           
            <button onClick={()=>handleComplete(todo)} 
            className="p-2 btn btn-sm btn-ghost m-0">
              <i>
                <FaCheckCircle />
              </i>
            </button>
            <button 
            onClick={()=>handleEdit(todo)}
            className="p-2 btn btn-sm btn-ghost m-0 "
              >
              <i>
                <FaEdit />
              </i>
            </button>
            <button onClick={()=>handleDelete(todo)} 
            className="btn btn-sm btn-ghost m-0 p-0 ">
              <i>
                <FaTrashAlt />
              </i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todo;
