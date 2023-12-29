import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductForm from '../ProductForm'
import DisplayAll from '../DisplayAll';

const Main = (props) => {
    const [ productList, setProductList ] = useState([]);

    // CREATE A NEW "PRODUCT"
    const createProduct = (productParam) => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then(res => {
                console.log(res); // track data
                console.log(res.data); 
                setProductList([...productList, res.data])
            })
            .catch(err => console.log(err))
    };

    // GET ALL "PRODUCTS" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProductList(res.data.products);
            })
            .catch(err => console.log(err))
        }, []);

    // REMOVE DELETED "PRODUCT" FROM DOM
    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId))
    };

    return (
        <div>
            <h2>Create a Product</h2>
            <ProductForm onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDescription="" />
            <hr style={{margin: "3rem"}} />
            <DisplayAll productList={productList} removeFromDom={removeFromDom} />
        </div>
    )


}

export default Main;