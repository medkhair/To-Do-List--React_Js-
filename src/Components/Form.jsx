import {useState} from 'react'
import styles from '../modules/form.module.css'


function Form({setTodos, todos}){

    const [todo, setTodo] = useState({name:"",done:false});
    

    function handleSubmition(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"", done:false}  );
    }
    return(
        <>
            <form className={styles.form} onSubmit={handleSubmition}>
                <input className={styles.input} onChange={(e) => { setTodo({name:e.target.value, done:false}  ) }} type="text" value={todo.name} placeholder='Enter a todo ...'/>
                <button type="submit" className={styles.button}>Add</button>

            </form>
        </>
    );
}

export default Form;