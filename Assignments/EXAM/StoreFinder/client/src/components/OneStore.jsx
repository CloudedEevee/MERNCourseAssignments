import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams  } from 'react-router-dom';
import Navbar from './views/Navbar';
import DeleteButton from './DeleteButton';

const OneStore = (props) => {
    const [ oneStore, setOneStore ] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                setOneStore(res.data.store);
            })
            .catch(err => console.log(err));
    }, []);


    return(
        <div>
            <Navbar />
            <h2>{ oneStore.storeName }</h2>
            <p>Store Number: { oneStore.number }</p>
            <p>{ oneStore.isOpen ? "Open" : "Not Open" }</p>
            <div>
                <Link to={`/stores/edit/${oneStore._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>
                    Edit
                </Link>
                | 
                <DeleteButton storeId={oneStore._id} 
                    successCallBack={() => removeFromDom(oneStore._id)}/>
            </div>
        </div>
    );
} 


export default OneStore;