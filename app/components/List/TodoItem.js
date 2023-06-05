const TodoItem = (props) => {
    
    const todoClickHandler = () => {
        props.removedItem(props.id)
    }

    return (
        <li 
        className="
        bg-red-600
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
                text-white
                ">
                {props.title}
                </h3>
            </button>
        </li>
    )
}

export default TodoItem; 