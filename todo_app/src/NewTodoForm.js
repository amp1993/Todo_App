
// ***NewTodoForm***

// this component should render a form with one text input for the task to be created. When this form is submitted, a new ***Todo*** component should be created. 


import React, {useState} from "react";


const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData => ({...formData,
        [name]: value}));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task-input">Enter New Task:</label>
            <input id="task-input" name="task" type="text"  value={formData.task}  placeholder="task" onChange={handleChange}></input>
            <button>Submit</button>
        </form>
    )

};

export default NewTodoForm;