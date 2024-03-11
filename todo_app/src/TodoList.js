

// ***TodoList***

// this component should render the ***NewTodoForm*** component and should render the list of Todo components. Place your state that contains all of the todos in this component.

import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from 'uuid';


const TodoList  = () =>{

    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) =>{
        const id = uuidv4();
        setTodos(todos => [...todos, {...newTodo, id}])
    };

    const removeTodo = (id) =>{
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos)
    };

    //Update Todos when it is edited. 
    const editTodo = (id, editedTask) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, task: editedTask } : todo
        );
        setTodos(updatedTodos);
      };

    return (
        <div className="todoList">
        <h2>Your Task List:</h2>
        <NewTodoForm addTodo={addTodo}   />
        {todos.map(({task, id})=> <Todo key={id} id={id} task={task} removeTodo={removeTodo} editTodo={editTodo}/>)}
        
        </div>
    )

} ;

export default TodoList;