import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const DisplayAll = (props) => {
    const { productList, removeFromDom } = props;

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
                        <DeleteButton productId={thisProduct._id} 
                            successCallBack={() => removeFromDom(thisProduct._id)} />
                    </p>
                ))
            }
        </div>
    )
}



export default DisplayAll;