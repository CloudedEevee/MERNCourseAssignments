import React, { useEffect, useState } from 'react'
import axios from 'axios'

import DisplayAll from '../DisplayAll';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [ authorList, setAuthorList ] = useState([]);

    // GET ALL "AUTHORS" FROM DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                // console.log(res.data);
                setAuthorList(res.data.authors);
            })
            .catch(err => console.log(err))
        }, []);

    // REMOVE DELETED "AUTHOR" FROM DOM
    const removeFromDom = authorId => {
        setAuthorList(authorList.filter(author => author._id != authorId))
    };

    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to={'/authors/add'}>Add an Author</Link>
            <hr style={{margin: "3rem"}} />
            <DisplayAll authorList={authorList} removeFromDom={removeFromDom} />
        </div>
    )


}

export default Main;


// <AuthorForm onSubmitProp={addAuthor} errs={errs} initialFullName="" />