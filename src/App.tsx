import { useState } from "react";
import InputField from "./Components/InputField"
import { Todo } from "./model";


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
      <div className="container mx-auto p-4" >
          <h1 className=" font-medium text-2xl text-center">Tasks</ h1>
          <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
      </div>
    )
}

export default App