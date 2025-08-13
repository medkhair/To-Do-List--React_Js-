import styles from '../modules/todoItem.module.css'


function TodoItem({item, todos, setTodos}){

    function handleDelete(i){
        setTodos(todos.filter((todo) => todo !== i));
        console.log("Delete clicked for ", i);
    }

    function handleCompleted(n) {
        let newTodos = todos.map(todo =>
            todo.name === n ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newTodos);
    }

    const className = item.done ? styles.completed : item.done;

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>
                    <span className={className} onClick={() => handleCompleted(item.name)}>
                        {item.name}
                    </span>
                    <span>
                        <button onClick={() => handleDelete(item)} className={styles.delete}>
                            X
                        </button>
                    </span>
                </div>
                
            </div>
            <hr className={styles.line}/>
        </>
    )
}

export default TodoItem;