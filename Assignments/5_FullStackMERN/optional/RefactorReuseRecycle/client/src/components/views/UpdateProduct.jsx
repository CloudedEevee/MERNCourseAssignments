import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../ProductForm";
import DeleteButton from "../DeleteButton";
import HomeButton from "../HomeButton";

const UpdateProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    // GET "PRODUCT" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    // UPDATE "PRODUCT" IN DB
    const updateProduct = (productParam) => {
        axios.patch('http://localhost:8000/api/products/' + id, productParam)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <HomeButton/>
            <h2>Update Product</h2>
            {
                loaded && (
                <>
                    <ProductForm onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price} 
                        initialDescription={product.description} 
                    />
                    <DeleteButton productId={id} 
                        successCallBack={() => navigate("/")} 
                    />
                </>
                )
            }
        </div>
    )
};

export default UpdateProduct;