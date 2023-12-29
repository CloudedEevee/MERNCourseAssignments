import React, { useEffect, useState } from 'react'
import axios from 'axios'

import DisplayAll from '../DisplayAll';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Main = (props) => {
    const [ storeList, setStoreList ] = useState([]);

    // GET ALL "STORES" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then(res => {
                setStoreList(res.data.stores);
            })
            .catch(err => console.log(err))
        }, []);

    // REMOVE DELETED "STORE" FROM DOM
    const removeFromDom = storeId => {
        setStoreList(storeList.filter(store => store._id != storeId))
    };

    return (
        <div>
            <h1 className='navbar'>Store Finder</h1>
            <DisplayAll storeList={storeList} removeFromDom={removeFromDom} />
            <hr style={{margin: "3rem"}} />
            <Link to={'/stores/add'}>Can't find your store?</Link>
        </div>
    )


}

export default Main;


// <StoreForm onSubmitProp={addStore} errs={errs} initialFullName="" />