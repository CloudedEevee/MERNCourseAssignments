import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthorForm from "../AuthorForm";
import DeleteButton from "../DeleteButton";
import HomeButton from "../HomeButton";

const AddAuthor = (props) => {
    const {id} = useParams();
    const [ errs, setErrs ] = useState([]);

    const navigate = useNavigate();


    // ADD A NEW "AUTHOR"
    const addAuthor = (authorParam) => {
        console.log(authorParam)
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then(res => {
                console.log(res); // track data
                console.log(res.data); 
                navigate("/");
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

    return (
        <div>
            <HomeButton/>
            <h2>Add Author</h2>
            {
                <>
                    <AuthorForm onSubmitProp={addAuthor} errs={errs}
                        initialFullName=""
                    />
                </>
                
            }
        </div>
    )
};

export default AddAuthor;