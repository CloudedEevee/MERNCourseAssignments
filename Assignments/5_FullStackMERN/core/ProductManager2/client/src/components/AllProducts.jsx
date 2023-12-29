import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const { productList, setProductList } = props;

    useEffect(() => {
        // get all products from db
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                
                console.log(res); // track data
                console.log(res.data);
                setProductList(res.data.products);
            })
            .catch(err => console.log(err))
        }, [])
        
    console.log(productList)
    return (
        <div>
            <h2>Product List</h2>
            {/* Products with Links: */}
            {
                productList.map((thisProduct, index) => (
                    <p>
                        <Link to={`/products/${thisProduct._id}`} key={index}>{ thisProduct.title }</Link>
                    </p>
                ))
            }
        </div>
    )
}



export default AllProducts;