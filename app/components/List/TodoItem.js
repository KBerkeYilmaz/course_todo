const TodoItem = (props) => {
    
    const todoClickHandler = () => {
        props.removedItem(props.id)
    }

    return (
        <li 
        className="
        bg-teal-800
        rounded-lg
        "
        >
            <button
            className="
            w-full
            h-full
            p-10
            "
            onClick={todoClickHandler}
            >
                <h3
                className="
                text-3xl
                text-slate-200
                ">
                {props.title}
                </h3>
            </button>
        </li>
    )
}

export default TodoItem; 