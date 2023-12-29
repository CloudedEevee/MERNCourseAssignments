import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Productform = () => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //create new in db
        axios.post('http://localhost:8000/api/products', {
            title, 
            price,
            description
        })
            .then(res => {
                console.log(res); // track data
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Create a Product</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label htmlFor="title">Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="price">Price: </label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="description">Description: </label>
                    <textarea name="description" id="description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
                </p>
                <input type="submit" value="Create" />
            </form>
        </div>
    )

}



export default Productform;