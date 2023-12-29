import React from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const DeleteButton = (props) => {
    const { storeId, successCallBack } = props;

    // DELETE "STORE" FROM DB
    const deleteStore = (e) => {
        axios.delete('http://localhost:8000/api/stores/' + storeId)
            .then(res => {
                successCallBack();
            })
            .catch(err => console.log(err))
    }

    return (
        <Link to={"/"} onClick={deleteStore}> Delete</Link>
    )
}


export default DeleteButton;