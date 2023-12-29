import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { productList, setProductList } = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState();
    
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err))
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="price">Price: </label>
                    <input type="text" name="price" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <input type="submit" value="Save" />
            </form>
        </div>
    )

};

export default Update;