import {useState} from 'react'

function Todo(){
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    function handleSubmition(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    return (
        <>
            <form onSubmit={handleSubmition}>
                <input onChange={(e) => { setTodo(e.target.value) }} type="text" value={todo} />
                <button type="submit">Add</button>

            </form>
            {console.log(todos)}

        </>
    );

   
}

export default Todo;