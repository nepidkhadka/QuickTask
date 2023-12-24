import { Todo } from "../model"
import { MdEditOff } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";

type Props = {
    todo: Todo,
    todos: Todo[],
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleToDo = ({ todo, todos, settodos }: Props) => {

    const handleDelete = (id: number) => {
       settodos(todos.filter(todo=>todo.id!==id))
    }

    const handleDone = (id: number) => {
        settodos(todos.map((todo) => (
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )))
    }

    return (
        <form className="border rounded-md flex grow w-full justify-between p-2" action="">
            {
                todo.isDone ?
                    (<s className="p-1 font-medium text-2xl overflow-auto rounded-md">{todo.todo}</s>)
                    :
                    (<span className="p-1 font-medium text-2xl overflow-auto rounded-md">{todo.todo}</span>)
            }
            <div className="flex gap-2 items-center">
                <span className="bg-yellow-500 p-1 rounded-md"><MdEditOff /></span>
                <span className="bg-red-500 p-1 rounded-md" onClick={() => handleDelete(todo.id)} ><MdDeleteForever /></span>
                <span className="bg-green-500 p-1 rounded-md" onClick={() => handleDone(todo.id)}  ><MdDoneAll />
                </span>
            </div>
        </form>
    )
}

export default SingleToDo