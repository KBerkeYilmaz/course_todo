import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const items = props.items
    const removedTodo = itemId => () => props.onTodoRemove(itemId);

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
                items.map((item) => (
                    <TodoItem 
                        id = {item.id}
                        key={item.id}
                        title={item.title}
                        removedItem= {removedTodo(item.id)} 
                    />
                ))
            }
        </ul>
    )
}

export default TodoList;