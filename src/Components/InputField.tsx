import React, { useRef } from 'react'

type Props = {
    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent)=> void
}

const InputField = (props: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e)=>{
            props.handleAdd(e)
            inputRef.current?.blur()
        }} className='flex w-11/12 relative items-center mt-8' action="">
            <input ref={inputRef} value={props.todo} onChange={(e)=>props.settodo(e.target.value)} type="input" placeholder='Enter Your Task' className='input__box text-black w-full rounded-3xl p-4 border-none' name="" id="" />
            <button className='btn absolute right-2 bg-[#2f74c0;] rounded-full px-3 h-5/6 shadow-xl'>Add</button>
        </form>
    )
}


export default InputField