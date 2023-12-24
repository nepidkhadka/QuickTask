import { Todo } from "../model"
import SingleToDo from "./SingleToDo"

type Props = {
    todos:Todo[],
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,settodos}: Props) => {
  return (
    <div className="flex justify-between gap-4 mt-8 flex-col w-3/4 mx-auto" >
        {todos.map(todo=>(
            <SingleToDo todo={todo} key={todo.id} todos={todos} settodos={settodos} />
        ))

        }
    </div>
  )
}

export default TodoList