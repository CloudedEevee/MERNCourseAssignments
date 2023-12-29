import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ModelForm from '../ModelForm'
import DisplayAll from '../DisplayAll';

const Main = (props) => {
    const [ modelList, setModelList ] = useState([]);
    const [ errs, setErrs ] = useState([]);

    // CREATE A NEW "MODEL"
    const createModel = (modelParam) => {
        console.log(modelParam)
        axios.post('http://localhost:8000/api/models', modelParam)
            .then(res => {
                console.log(res); // track data
                console.log(res.data); 
                setModelList([...modelList, res.data])
            })
            .catch(err => {
                const errRes = err.response.data.errors; // get errs from res
                const errArr = []; // temp err array for messages
                for (const key of Object.keys(errRes)) { // for every error in errRes
                    errArr.push(errRes[key].message) // add message to temp array
                }
                setErrs(errArr);
            })
    };

    // GET ALL "MODELS" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/models')
            .then(res => {
                // console.log(res.data);
                setModelList(res.data.models);
            })
            .catch(err => console.log(err))
        }, []);

    // REMOVE DELETED "MODEL" FROM DOM
    const removeFromDom = modelId => {
        setModelList(modelList.filter(model => model._id != modelId))
    };

    return (
        <div>
            <h2>Create a Model</h2>
            <ModelForm onSubmitProp={createModel} errs={errs}
                initialAttribute1=""
                initialAttribute2=""
                initialAttribute3="" />
            <hr style={{margin: "3rem"}} />
            <DisplayAll modelList={modelList} removeFromDom={removeFromDom} />
        </div>
    )


}

export default Main;