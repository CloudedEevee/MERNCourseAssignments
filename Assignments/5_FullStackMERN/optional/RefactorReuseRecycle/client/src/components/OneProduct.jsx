import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HomeButton from './HomeButton';

const OneProduct = (props) => {
    const [ OneProduct, setOneProduct ] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                setOneProduct(res.data.product);
            })
            .catch(err => console.log(err));
    }, []);



    return(
        <div>
            <h2>{ OneProduct.title }</h2>
            <p>Price: ${ OneProduct.price }</p>
            <p>Description: { OneProduct.description }</p>
            <HomeButton/>
        </div>
    );
} 


export default OneProduct;