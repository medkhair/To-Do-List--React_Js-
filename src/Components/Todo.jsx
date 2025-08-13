import {useState} from 'react'
import Form from './Form';
import TodoList from './TodoList';

function Todo(){
    const [todos, setTodos] = useState([]);
    
    return (
        <>
           
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} />

        </>
    );

   
}

export default Todo;