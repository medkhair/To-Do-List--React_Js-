import styles from '../modules/todoItem.module.css'


function TodoItem({item}){
    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>{item}
                    <span>
                        <button className={styles.delete}>
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