import TodoItem from './TodoItem';

import styles from '../modules/list.module.css'

function TodoList({todos, setTodos}){

    const sorted = todos.slice().sort((a,b) => Number(a.done - b.done));

    return (
        <>
            <div className={styles.list}>
                {sorted.map(
                    (item) => (
                        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
                    )
                )}
            </div>
            
        </>
    );
}

export default TodoList; 