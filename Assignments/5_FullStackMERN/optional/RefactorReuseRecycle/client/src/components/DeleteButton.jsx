import React from "react"
import axios from "axios";

const DeleteButton = (props) => {
    const { productId, successCallBack } = props;

    // DELETE "PRODUCT" FROM DB
    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                successCallBack();
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}


export default DeleteButton;