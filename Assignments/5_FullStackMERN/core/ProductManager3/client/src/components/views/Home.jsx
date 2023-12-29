import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AllProducts from '../AllProducts'
import ProductForm from '../ProductForm'

const Home = (props) => {
    const [ productList, setProductList ] = useState([]);

    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId))
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr style={{margin: "3rem"}} />
            <AllProducts productList={productList} 
                setProductList={setProductList} 
                removeFromDom={removeFromDom} />
        </div>
    )


}

export default Home;