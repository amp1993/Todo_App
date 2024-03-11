
// ***Todo***

// this component should display a ***div*** with the task of the todo.

// For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

import React, { useState } from "react";

const Todo = ({ id, task, removeTodo, editTodo }) => {
    
    //set state for editing the task.Default will be false. 
    const [isEditing, setEditing] = useState(false);
    //Set state for when task has been edited and needs to update state in tasks. 
    const [editedTask, setEditedTask] = useState(task);

    //Handle edit button.
    const handleEdit = () => {
        setEditing(true);
    };

    //Save edited task that has been edited. 
    const handleSave = () => {
        editTodo(id, editedTask);
        setEditing(false);

    };

    return (
        //Have the remove and Edit button surface if isEditing is false. If isEditing is set to true, surface save button and hide remove and edit button. 
        <>
            
            {isEditing ? (
                <div id={id}>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button className="saveButton" onClick={() => { handleSave(id) }}>Save</button>
                </div>
            ) : (
                <div id={id}>
                    {task}
                    <button className="removeTodo" onClick={() => { removeTodo(id) }}>X</button>
                    <button className="editButton" onClick={() => { handleEdit(id, task) }}>Edit</button>
                </div>
            )}

        </>



    )

};

export default Todo;