'use client'

import { useState} from 'react';

let count = 1;

const TodoForm = (props) => {
    

    const [inputState, setInputState] = useState('')
    const [todoKey,setTodoKey] = useState(count)

    const inputChangeHandler = (event) => {
        let value = event.target.value
        setInputState(value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault()
        const newTodo = {
            id: todoKey,
            title: inputState
        }
        props.onTodoChange(newTodo)
        setInputState('')
        setTodoKey(count += 1)

    }

    

    return (
    <form 
        onSubmit={submitFormHandler}
        className="
        w-[40%] 
        h-[15%]
        bg-slate-300  
        flex 
        flex-col 
        justify-center 
        items-center
        gap-5
        rounded-3xl
        my-10
        p-10"
        >
            <input 
            className="
            rounded-md
            w-[70%]
            p-3"
            type="text"
            value={inputState}
            onChange={inputChangeHandler} 
            required/>
            <button
                className="
                bg-red-700 
                w-60
                h-10 
                rounded-md 
                text-slate-200"
                type='submit'
                >Add Todo</button>
    </form> 
    )
}

export default TodoForm;