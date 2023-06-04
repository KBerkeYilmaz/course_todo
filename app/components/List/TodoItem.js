const TodoItem = (props) => {
    
    return (
        <li>
            <h3
            className="
            text-4xl
            text-white
            bg-red-600
            p-10
            rounded-lg
            "
            >
            {props.title}
            </h3>
        </li>
    )
}

export default TodoItem; 