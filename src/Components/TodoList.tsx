import { Todo } from "../model"
import SingleToDo from "./SingleToDo"

type Props = {
  todos: Todo[],
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, settodos }: Props) => {
  return (
    <div className="flex justify-between gap-8 mt-4">
      <div className="bg-[#0060AA] rounded-lg w-2/4 p-4 ">
        <h2 className=" text-2xl font-medium text-center" >Active Tasks</h2>
        <div className="flex justify-between gap-4 mt-4 flex-col" >
          {todos.map(todo => (
            <SingleToDo todo={todo} key={todo.id} todos={todos} settodos={settodos} />
          ))
          }
        </div>
      </div>
      <div className="bg-[#0060AA] rounded-lg w-2/4 p-4 ">
        <h2 className=" text-2xl font-medium text-center" >Completed Tasks</h2>
        <div className="flex justify-between gap-4 mt-4 flex-col" >
          
        </div>
      </div>

    </div>

  )
}

export default TodoList