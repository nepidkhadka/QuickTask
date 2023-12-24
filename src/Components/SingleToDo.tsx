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
    return (
        <form className="border rounded-md flex grow w-full justify-between p-2" action="">
            <span className="p-1 font-medium text-2xl overflow-auto rounded-md">{todo.todo}</span>
            <div className="flex gap-2 items-center">
                <button className="bg-yellow-500 p-1 rounded-md"><MdEditOff /></button>
                <button className="bg-red-500 p-1 rounded-md" ><MdDeleteForever /></button>
                <button className="bg-green-500 p-1 rounded-md"  ><MdDoneAll />
                </button>
            </div>
        </form>
    )
}

export default SingleToDo