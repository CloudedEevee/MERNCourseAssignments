import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const DisplayAll = (props) => {
    const { authorList, removeFromDom } = props;

    return (
        <div>
            <h2>Author List</h2>
            {/* Authors with Links: */}
            {
                authorList.map((thisAuthor, index) => (
                    <p key={index}>
                        <Link to={`/authors/${thisAuthor._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>{ thisAuthor.fullName }</Link>
                        | 
                        <Link to={`/authors/edit/${thisAuthor._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>
                            Edit
                        </Link>
                        | 
                        <DeleteButton authorId={thisAuthor._id} 
                            successCallBack={() => removeFromDom(thisAuthor._id)} />
                    </p>
                ))
            }
        </div>
    )
}



export default DisplayAll;