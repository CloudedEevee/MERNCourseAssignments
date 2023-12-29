import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllProducts = () => {
    const [ productList, setProductList ] = useState([]);

    useEffect(() => {
        // get all products from db
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                
                console.log(res); // track data
                console.log(res.data);
                return setProductList(res.data.products)
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <h2>Product List: </h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (productList.length > 0) ?
                            productList.map((thisProduct, index) => (
                                <tr key={index}>
                                    <td> { thisProduct.title } </td>
                                    <td> { thisProduct.price } </td>
                                    <td> { thisProduct.description } </td>
                                </tr>
                            )) :
                            <tr>
                                <td colSpan={3}> No products yet. Please create one below. </td>
                            </tr>
                    }
                </tbody>
            </table>
            <hr />
        </div>
    )
}



export default AllProducts;