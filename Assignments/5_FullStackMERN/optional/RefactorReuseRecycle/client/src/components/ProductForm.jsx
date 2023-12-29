import React, { useEffect, useState } from 'react'

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;

    const [ title, setTitle ] = useState(initialTitle);
    const [ price, setPrice ] = useState(initialPrice);
    const [ description, setDescription ] = useState(initialDescription);

    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label htmlFor="description">Description: </label>
                <textarea name="description" id="description" value={description} cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
            </p>
            <button type="submit">Save</button>
        </form>
    )

}



export default ProductForm;