import TodoItem from './TodoItem';

import styles from '../modules/list.module.css'

function TodoList({todos}){
    return (
        <>
            <div className={styles.list}>
                {todos.map(
                    (item) => (
                        <TodoItem item={item} />
                    )
                )}
            </div>
            
        </>
    );
}

export default TodoList; 