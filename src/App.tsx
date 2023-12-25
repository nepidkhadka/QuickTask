import { useEffect, useState } from "react";
import InputField from "./Components/InputField"
import { Todo } from "./model";
import TodoList from "./Components/TodoList";


const App:React.FC = () => {

  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>(()=>{
    const storedTodos = localStorage.getItem("todos");
    return storedTodos? JSON.parse(storedTodos): []
  });


  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo)
    {
      settodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
      settodo("");
    }
  } 

  useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
      <div className="container mx-auto p-4" >
          <h1 className=" font-bold text-2xl mt-4 p-2 rounded-lg text-center">QuickTask - Sync Your Productivity</ h1>
          <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
          <TodoList todos={todos} settodos={settodos} />
      </div>
    )
}

export default App