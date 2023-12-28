import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model"
import SingleToDo from "./SingleToDo"

type Props = {
  todos: Todo[],
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  completedtodos: Todo[];
  setcompletedtodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList = ({ todos, settodos, completedtodos, setcompletedtodos }: Props) => {
  return (
    <div className="flex justify-between gap-8 mt-4">
      <Droppable droppableId="todolist" >
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="bg-[#0060AA] rounded-lg w-2/4 p-5 ">
            <h2 className=" text-2xl font-medium text-center" >Active Tasks</h2>
            <div className="flex justify-between gap-4 mt-4 flex-col" >
              {todos.map((todo, index) => (
                <SingleToDo index={index} todo={todo} key={todo.id} todos={todos} settodos={settodos} />
              ))
              }
            {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="todolistremove" >
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="bg-[#0060AA] rounded-lg w-2/4 h-min p-5 ">
            <h2 className=" text-2xl font-medium text-center" >Completed Tasks</h2>
            <div className="flex justify-between gap-4 mt-4 flex-col" >
              {completedtodos.map((todo, index) => (
                <SingleToDo index={index} todo={todo} key={todo.id} todos={todos} settodos={setcompletedtodos} />
              ))
              }
            {provided.placeholder}
            </div>
          </div>
          )}
        </Droppable>

    </div>

  )
}

export default TodoList