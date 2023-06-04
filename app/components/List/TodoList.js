import { useState} from 'react';

import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const items = props.items
    
    return (
        <ul 
        className="
        w-[40%]
        min-h-[60%]
        flex
        flex-col
        gap-10
        bg-amber-200
        rounded-lg
        p-10
        mb-10
        "
        >   
            {
                items.map(item => (
                    <TodoItem 
                        key={item.id} 
                        title={item.title} 
                    />
                ))
            }
        </ul>
    )
}

export default TodoList;