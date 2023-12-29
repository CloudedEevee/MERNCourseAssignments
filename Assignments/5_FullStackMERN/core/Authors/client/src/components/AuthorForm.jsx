import React, { useState } from 'react';
import { Button } from '@mui/material';

const AuthorForm = (props) => {
    const { onSubmitProp, errs, initialFullName } = props;

    const [ fullName, setFullName ] = useState(initialFullName);

    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({fullName});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {
                errs.map((err, i) => (
                    <p key={i}>{ err }</p>
                ))
            }
            <p>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </p>
            <Button variant='outlined' href='/' style={{marginRight: "1rem"}}>Cancel</Button>
            <button type="submit">Save</button>
        </form>
    )

}



export default AuthorForm;