import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const { removeFromDom, productList, setProductList } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        // get all products from db
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                
                console.log(res); // track data
                console.log(res.data);
                setProductList(res.data.products);
            })
            .catch(err => console.log(err))
        }, []);
        
    console.log(productList)

    return (
        <div>
            <h2>Product List</h2>
            {/* Products with Links: */}
            {
                productList.map((thisProduct, index) => (
                    <p key={index}>
                        <Link to={`/products/${thisProduct._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>{ thisProduct.title }</Link>
                        | 
                        <Link to={`/products/edit/${thisProduct._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>
                            Edit
                        </Link>
                        | 
                        <button onClick={(e) => {deleteProduct(thisProduct._id)}} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>
                            Delete 
                        </button>
                    </p>
                ))
            }
        </div>
    )
}



export default AllProducts;