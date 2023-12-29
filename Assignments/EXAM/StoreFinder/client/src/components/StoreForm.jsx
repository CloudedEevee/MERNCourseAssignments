import React, { useState } from 'react';
import { Button } from '@mui/material';

const StoreForm = (props) => {
    const { onSubmitProp, errs, initialStoreName, initialNumber, initialIsOpen } = props;

    const [ storeName, setStoreName ] = useState(initialStoreName);
    const [ number, setNumber ] = useState(initialNumber);
    const [ isOpen, setIsOpen ] = useState(initialIsOpen);

    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({storeName, number, isOpen});
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="storeName">Store Name: </label>
                <input type="text" id="storeName" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
                { errs.storeName ?
                    <p className='error'>{errs.storeName.message}</p>
                    : null
                }
            </div>
            <div>
                <label htmlFor="number">Store Number: </label>
                <input type="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                { errs.number ?
                    <p className='error'>{errs.number.message}</p>
                    : null
                }
            </div>
            <div>
                <input type="checkbox" id="isOpen" onChange={(e) => setIsOpen(e.target.checked)} defaultChecked={isOpen ? "checked" : false} />
                <label htmlFor="isOpen"> Open?</label>
            </div>

            <Button variant='outlined' href='/' style={{marginRight: "1rem"}}>Cancel</Button>
            <button type="submit">Save</button>
        </form>
    )

}



export default StoreForm;