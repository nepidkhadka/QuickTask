import { useEffect, useRef, useState } from "react";
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
    const inputref = useRef<HTMLInputElement>(null)

    const [edit, setedit] = useState<boolean>(false);
    const [edittodo, setedittodo] = useState<string>(todo.todo);

    const handleDelete = (id: number) => {
        settodos(todos.filter(todo => todo.id !== id))
    }

    const handleDone = (id: number) => {
        settodos(todos.map((todo) => (
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )))
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        settodos(todos.map(maptodo => (
            maptodo.id === id ? { ...todo, todo: edittodo } : maptodo
        )))
        setedit(!edit);
    }

    useEffect(() => {
        inputref.current?.focus();
    }, [edit])



    return (
        <form className="border rounded-md flex gap-2 grow w-full justify-between p-2" onSubmit={(e) => handleSubmit(e, todo.id)}>
            {
                edit ?
                    (
                        <input ref={inputref} onChange={(e) => setedittodo(e.target.value)} type="text" className="bg-slate-200 w-full outline-none text-black p-1 text-2xl rounded-md" name="" id="" value={edittodo} />
                    )
                    :
                    (
                        todo.isDone ?
                            (<s className="p-1 capitalize font-medium text-2xl overflow-auto rounded-md text-slate-700">{todo.todo}</s>)
                            :
                            (<span className="p-1 capitalize font-medium text-2xl overflow-auto rounded-md">{todo.todo}</span>)
                    )
            }

            <div className="flex gap-1 sm:gap-2 items-center">
                <span className="bg-yellow-500 p-1 rounded-md hover:bg-yellow-600" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setedit(!edit)
                    }
                }} ><MdEditOff /></span>
                <span className="bg-green-500 p-1 rounded-md hover:bg-green-600" onClick={() => handleDone(todo.id)}  ><MdDoneAll /></span>
                <span className="bg-red-500 p-1 rounded-md hover:bg-red-600" onClick={() => handleDelete(todo.id)} ><MdDeleteForever /></span>
            </div>
        </form>
    )
}

export default SingleToDo