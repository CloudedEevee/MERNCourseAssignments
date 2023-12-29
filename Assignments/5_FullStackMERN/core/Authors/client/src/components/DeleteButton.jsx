import React from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const DeleteButton = (props) => {
    const { authorId, successCallBack } = props;

    // DELETE "AUTHOR" FROM DB
    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                successCallBack();
            })
            .catch(err => console.log(err))
    }

    return (
        <Link onClick={deleteAuthor}> Delete</Link>
    )
}


export default DeleteButton;