import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ModelForm from "../ModelForm";
import DeleteButton from "../DeleteButton";
import HomeButton from "../HomeButton";

const UpdateModel = (props) => {
    const {id} = useParams();
    const [model, setModel] = useState({});
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    // GET "MODEL" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/models/' + id)
            .then(res => {
                setModel(res.data.model);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    // UPDATE "MODEL" IN DB
    const updateModel = (modelParam) => {
        axios.patch('http://localhost:8000/api/models/' + id, modelParam)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <HomeButton/>
            <h2>Update Model</h2>
            {
                loaded && (
                <>
                    <ModelForm onSubmitProp={updateModel}
                        initialAttribute1={model.attribute1}
                        initialAttribute2={model.attribute2} 
                        initialAttribute3={model.attribute3} 
                    />
                    <DeleteButton modelId={id} 
                        successCallBack={() => navigate("/")} 
                    />
                </>
                )
            }
        </div>
    )
};

export default UpdateModel;