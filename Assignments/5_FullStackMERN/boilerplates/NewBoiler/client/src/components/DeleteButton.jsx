import React from "react"
import axios from "axios";

const DeleteButton = (props) => {
    const { modelId, successCallBack } = props;

    // DELETE "MODEL" FROM DB
    const deleteModel = (e) => {
        axios.delete('http://localhost:8000/api/models/' + modelId)
            .then(res => {
                successCallBack();
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deleteModel}>
            Delete
        </button>
    )
}


export default DeleteButton;