import {useState} from 'react'
import styles from '../modules/form.module.css'


function Form({setTodos, todos}){

    const [todo, setTodo] = useState("");
    

    function handleSubmition(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    return(
        <>
            <form className={styles.form} onSubmit={handleSubmition}>
                <input className={styles.input} onChange={(e) => { setTodo(e.target.value) }} type="text" value={todo} placeholder='Enter a todo ...'/>
                <button type="submit" className={styles.button}>Add</button>

            </form>
        </>
    );
}

export default Form;