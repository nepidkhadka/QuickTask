import { useState } from "react";
import InputField from "./Components/InputField"
import { Todo } from "./model";
import TodoList from "./Components/TodoList";


const App:React.FC = () => {

  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);


  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo)
    {
      settodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
      settodo("");
    }
  } 

  return (
      <div className="container mx-auto p-4 px-8" >
          <h1 className=" font-medium text-2xl text-center">Tasks</ h1>
          <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
          <TodoList todos={todos} settodos={settodos} />
      </div>
    )
}

export default App