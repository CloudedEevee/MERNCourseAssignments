import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HomeButton from './HomeButton';

const OneAuthor = (props) => {
    const [ OneAuthor, setOneAuthor ] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data);
                setOneAuthor(res.data.author);
            })
            .catch(err => console.log(err));
    }, []);



    return(
        <div>
            <h2>{ OneAuthor.fullName }</h2>
            <p>
                <Link to={`/authors/edit/${OneAuthor._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>
                    Edit
                </Link>
                | 
                <HomeButton/>
            </p>
        </div>
    );
} 


export default OneAuthor;