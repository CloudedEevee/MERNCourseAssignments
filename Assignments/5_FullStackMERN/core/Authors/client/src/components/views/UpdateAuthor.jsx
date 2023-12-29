import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthorForm from "../AuthorForm";
import DeleteButton from "../DeleteButton";
import HomeButton from "../HomeButton";

const UpdateAuthor = (props) => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [ errs, setErrs ] = useState([]);

    const navigate = useNavigate();

    // GET "AUTHOR" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data.author);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    // UPDATE "AUTHOR" IN DB
    const updateAuthor = (authorParam) => {
        axios.patch('http://localhost:8000/api/authors/' + id, authorParam)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                const errRes = err.response.data.errors; // get errs from res
                const errArr = []; // temp err array for messages
                for (const key of Object.keys(errRes)) { // for every error in errRes
                    errArr.push(errRes[key].message) // add message to temp array
                }
                setErrs(errArr);
            })    };

    return (
        <div>
            <HomeButton/>
            <h2>Update Author</h2>
            {
                loaded && (
                <>
                    <AuthorForm onSubmitProp={updateAuthor} errs={errs}
                        initialFullName={author.fullName}
                    />
                    <DeleteButton authorId={id} 
                        successCallBack={() => navigate("/")} 
                    />
                </>
                )
            }
        </div>
    )
};

export default UpdateAuthor;