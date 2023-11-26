import React, { useState } from "react";

const TaskForm = (props) => {
    const [task, setTask] = useState("");
    const [taskErr, setTaskErr] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const {taskList, setTaskList} = props;

    // Function to create a task
    const createTask = (e) => {
        e.preventDefault();
        console.log("Passed default settings...");

        // creates task object, sets defaults and inputs
        const newTask = {task, isChecked};
        setTask("");
        setIsChecked(false);

        setTaskList([...taskList, newTask]);
    }

    // Function to handle task validations
    const handleTask = (e) => {
        setTask(e.target.value);
        if(e.target.value.length < 2) {
            setTaskErr("Task must be at least 2 characters to add");
        }
        else {
            setTaskErr("");
        }
    }

    return(
        <div>
            {/* Create Task */}
            <form onSubmit= { createTask }>
                <input type="text" value={ task } onChange={ handleTask } />
                {
                    (taskErr) ?
                    <button type="submit" disabled>Add Task</button> :
                    <button type="submit">Add Task</button>
                }
            </form>
        </div>

    )



}

export default TaskForm;