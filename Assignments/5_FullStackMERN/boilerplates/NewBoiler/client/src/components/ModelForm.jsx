import React, { useEffect, useState } from 'react'

const ModelForm = (props) => {
    const { onSubmitProp, errs, initialAttribute1, initialAttribute2, initialAttribute3 } = props;

    const [ attribute1, setAttribute1 ] = useState(initialAttribute1);
    const [ attribute2, setAttribute2 ] = useState(initialAttribute2);
    const [ attribute3, setAttribute3 ] = useState(initialAttribute3);

    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({attribute1, attribute2, attribute3});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {
                errs.map((err, i) => (
                    <p key={i}>{ err }</p>
                ))
            }
            <p>
                <label htmlFor="attribute1">Attribute1: </label>
                <input type="text" id="attribute1" value={attribute1} onChange={(e) => setAttribute1(e.target.value)} />
            </p>
            <p>
                <label htmlFor="attribute2">Attribute2: </label>
                <input type="number" id="attribute2" value={attribute2} onChange={(e) => setAttribute2(e.target.value)} />
            </p>
            <p>
                <label htmlFor="attribute3">Attribute3: </label>
                <textarea name="attribute3" id="attribute3" value={attribute3} cols="30" rows="10" onChange={(e) => setAttribute3(e.target.value)}></textarea>
            </p>
            <button type="submit">Save</button>
        </form>
    )

}



export default ModelForm;