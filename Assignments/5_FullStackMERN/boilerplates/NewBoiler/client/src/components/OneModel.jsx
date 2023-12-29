import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HomeButton from './HomeButton';

const OneModel = (props) => {
    const [ OneModel, setOneModel ] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/models/' + id)
            .then(res => {
                console.log(res.data);
                setOneModel(res.data.model);
            })
            .catch(err => console.log(err));
    }, []);



    return(
        <div>
            <h2>{ OneModel.attribute1 }</h2>
            <p>Attribute2: ${ OneModel.attribute2 }</p>
            <p>Attribute3: { OneModel.attribute3 }</p>
            <HomeButton/>
        </div>
    );
} 


export default OneModel;