import { useEffect, useState } from "react";
import InputField from "./Components/InputField"
import { Todo } from "./model";
import TodoList from "./Components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd"

const App: React.FC = () => {

  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : []
  });
  const [completedtodos, setcompletedtodos] = useState<Todo[]>([]);



  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      settodo("");
    }
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result);

    const { source, destination } = result;
    if (!destination) {

      return;
    }

    if (destination.droppableId === source.droppableId
      && destination.index === source.index) {
      return;
    }

    let add,
      active = todos,
      complete = completedtodos;

    if (source.droppableId === "active") {
      add = active[source.index];
      active.splice(source.index, 1)
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === "active") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setcompletedtodos(complete);
    settodos(active);

  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mx-auto p-4" >
        <h1 className="font-bold text-2xl mt-4 p-2 rounded-lg text-center">QuickTask - Sync Your Productivity</ h1>
        <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
        <TodoList todos={todos} settodos={settodos} completedtodos={completedtodos} setcompletedtodos={setcompletedtodos} />
      </div>
    </DragDropContext>
  )
}

export default App