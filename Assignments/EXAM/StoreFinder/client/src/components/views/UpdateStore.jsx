import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import StoreForm from "../StoreForm";
import DeleteButton from "../DeleteButton";
import HomeButton from "../HomeButton";
import Navbar from "./Navbar";

const UpdateStore = (props) => {
    const {id} = useParams();
    const [store, setStore] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [ errs, setErrs ] = useState([]);

    const navigate = useNavigate();

    // GET "STORE" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                setStore(res.data.store);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    // UPDATE "STORE" IN DB
    const updateStore = (storeParam) => {
        axios.patch('http://localhost:8000/api/stores/' + id, storeParam)
            .then(res => {
                navigate("/stores/" + id);
            })
            .catch(err => {
                setErrs(err.response.data.errors);
            })    
    };

    return (
        <div>
            <Navbar />
            <h2>Update Store</h2>
            {
                loaded && (
                <>
                    <StoreForm onSubmitProp={updateStore} errs={errs}
                        initialStoreName={store.storeName}
                        initialNumber={store.number}
                    />
                    <DeleteButton storeId={id} 
                        successCallBack={() => navigate("/")} 
                    />
                </>
                )
            }
        </div>
    )
};

export default UpdateStore;