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
        <form className=" bg-[#D5B942] rounded-md w-4/5 flex grow justify-between p-2" action="">
            <span className="bg-[#2f74c0] p-1 rounded-md">{todo.todo}</span>
            <div className="flex gap-1 items-center">
                <span className="" ><MdEditOff /></span>
                <span><MdDeleteForever /></span>
                <span><MdDoneAll />
                </span>
            </div>
        </form>
    )
}

export default SingleToDo