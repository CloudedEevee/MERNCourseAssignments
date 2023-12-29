import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

import StoreForm from "../StoreForm";
import Navbar from "./Navbar";

const AddStore = (props) => {
    const {id} = useParams();
    const [ errs, setErrs ] = useState([]);

    const navigate = useNavigate();


    // ADD A NEW "STORE"
    const addStore = (storeParam) => {
        console.log(storeParam)
        axios.post('http://localhost:8000/api/stores', storeParam)
            .then(res => {
                navigate("/stores/" + res.data._id);
            })
            .catch(err => {
                setErrs(err.response.data.errors);
            })
    };

    return (
        <div>
            <Navbar />
            <h2>Add Store</h2>
            {
                <>
                    <StoreForm onSubmitProp={addStore} errs={errs}
                        initialStoreName=""
                        initialNumber=""
                        initialIsOpen={false}
                    />
                </>
                
            }
        </div>
    )
};

export default AddStore;