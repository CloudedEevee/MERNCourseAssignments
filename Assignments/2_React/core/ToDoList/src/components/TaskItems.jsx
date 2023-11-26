import React, { useState } from "react";

const TaskItems = (props) => {
    console.log(`props: ${props}`)
    const { taskList, setTaskList } = props;

    console.log(`taskList is: ${taskList}`)

    const taskDelete = (e, index) => {
        e.preventDefault();
        console.log(`index is ${index}`)
        // setTaskList([...taskList.slice(0, index), ...taskList.slice((index + 1), taskList.length)])
        setTaskList(taskList.filter((thisTask, i) => i !== index));
    }

    return(
            <div>
                <h2>Current Tasks</h2>
                <div>
                    {
                        taskList.map( (thisTask, index) => (
                            <div key={index}>
                                <form onSubmit= {(e) => taskDelete(e, index) }>
                                    <input type="checkbox" defaultChecked={ thisTask.isChecked ? true : false } name={ index }/>
                                    <label htmlFor="index">{ thisTask.task }</label>
                                    <button type="submit">Delete</button>
                                </form>
                            </div>
                        ))
                    }
                </div>
            </div>
    );

}

export default TaskItems;





    // list.map(() => ())
    // function() ---> implied () when no params passed, () necessary when passing params

    // const taskListBuild = taskList.map( (thisTask, index) => (
    //     `<div>
    //         <form onSubmit= { taskDelete(e, index) }>
    //             <input type="checkbox" defaultChecked={ thisTask.isChecked ? "checked" : "unchecked" } name={ index }/>
    //             <label htmlFor="index">{ thisTask.task }</label>
    //             <button type="submit">Delete</button>
    //         </form>
    //     </div>`
    //     ))

    // const taskDelete = (e, index) => {
    //     setTaskList([...taskList.slice(0, index), ...taskList.slice((index + 1), taskList.length)])
    // }