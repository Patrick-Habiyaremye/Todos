import { useState } from 'react';

export default function App(){
  const [todos, setTodos] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const AddTodo = () =>{
    if(input.trim()){
      setTodos([...todos, { id: Date.now(), text: input, completed: false}])
      setInput("")
    }
  }
  
  return(
  <div className="min-h-screen flex flex-col bg-green-500 items-center justify-center px-4 py-6">
  <div className="w-full max-w-lg">
    
    <div className="bg-white shadow-lg rounded-3xl p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-yellow-500 mb-6">
        KESH Todos App
      </h1>

      <div className="flex flex-col sm:flex-row gap-2">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new item" 
          className="flex-grow border rounded-lg sm:rounded-l-lg px-4 py-2 outline-none"
        />
        <button 
          onClick={AddTodo} 
          className="bg-blue-500 px-4 py-2 rounded-lg sm:rounded-r-lg text-white hover:bg-blue-600"
        >
          ADD
        </button>
      </div>
    </div>

    <ul className="mt-6 space-y-2 w-full">
      {
        todos.map((todo) =>(
          <li 
            key={todo.id} 
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow border border-gray-200"
          >
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() =>{
                setTodos(
                  todos.map((t)=> (
                    t.id === todo.id ? {...t, completed: !t.completed} : t
                  ))
                )
              }} 
            />

            <span 
              className={`flex-grow ml-3 text-sm sm:text-base ${
                todo.completed 
                ? "line-through text-gray-500" 
                : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>

            <button 
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))} 
              className="ml-2 px-2 sm:px-3 py-1 text-sm sm:text-base rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))
      }
    </ul>

  </div>
</div>
  )
}

