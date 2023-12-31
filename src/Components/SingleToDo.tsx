import { useEffect, useRef, useState } from "react";
import { Todo } from "../model"
import { MdEditOff } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

type Props = {
    todo: Todo,
    todos: Todo[],
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    index: number,
    completed?: boolean,
}

const SingleToDo = ({ index, todo, todos, settodos, completed }: Props) => {
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
        <Draggable draggableId={todo.id.toString()} index={index} >
            {
                (provided) => (

                    <form onSubmit={(e) => handleSubmit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="rounded-md flex gap-2 grow w-full justify-between p-2 bg-primary hover:scale-[1.02] hover:border hover:cursor-grab"  >
                        {
                            edit ?
                                (
                                    <input ref={inputref} onChange={(e) => setedittodo(e.target.value)} type="text" className="bg-slate-200 w-full outline-none text-black p-1 text-2xl rounded-md" name="" id="" value={edittodo} />
                                )
                                :
                                (
                                    completed ?
                                        (<s className="p-1 capitalize font-medium text-xl overflow-auto rounded-md text-slate-700">{todo.todo}</s>)
                                        :
                                        (<span className="p-1 capitalize font-medium text-xl overflow-auto rounded-md">{todo.todo}</span>)
                                )
                        }

                        <div className="flex gap-1 sm:gap-2 items-center">
                            {
                                completed ?
                                    "" : (<span className="bg-yellow-500 p-1 rounded-md hover:bg-yellow-600 cursor-default" onClick={() => {
                                        if (!edit && !todo.isDone) {
                                            setedit(!edit)
                                        }
                                    }} ><MdEditOff /></span>)
                            }

                            {/* <span className="bg-green-500 p-1 rounded-md hover:bg-green-600 cursor-default" onClick={() => handleDone(todo.id)}  ><MdDoneAll /></span> */}
                            <span className="bg-red-500 p-1 rounded-md hover:bg-red-600 cursor-default" onClick={() => handleDelete(todo.id)} ><MdDeleteForever /></span>
                        </div>
                    </form>
                )
            }

        </Draggable>
    )
}

export default SingleToDo