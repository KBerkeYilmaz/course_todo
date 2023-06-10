'use client'

import { useState} from 'react';
import Button from '../UI/Button';

let count = 0;

const TodoForm = (props) => {
    

    const [inputState, setInputState] = useState('')
    const [todoId,setTodoId] = useState(count)
    const [isValid, setIsValid] = useState(true)

    const inputChangeHandler = (event) => {
        let value = event.target.value;
        if(value.trim().length > 0) {
        setIsValid(true);    
        }
        setInputState(value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault()
        if(inputState.trim().length === 0) {
            setIsValid(false)
            return;
        }
        const newTodo = {
            id: todoId,
            title: inputState
        }
        props.onTodoChange(newTodo)
        setInputState('')
        setTodoId(count += 1)

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
        rounded-lg
        my-10
        p-10"
        >
            <label 
            className={`text-4xl ${!isValid ? 'text-xl' : 'text-4xl'}`}
            style={{color: !isValid ? 'red' : 'black'}}>What is your ToDo?</label>
            <input 
            className="
            rounded-md
            w-[70%]
            p-3"
            type="text"
            style={{borderColor: !isValid ? 'red' : 'black', 
                    backgroundColor: !isValid ? 'salmon' : 'white'}}
            value={inputState}
            onChange={inputChangeHandler} 
            />
            <Button type='submit'>Add ToDo</Button>
    </form> 
    )
}

export default TodoForm;