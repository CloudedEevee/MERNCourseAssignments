import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const DisplayAll = (props) => {
    const { modelList, removeFromDom } = props;

    return (
        <div>
            <h2>Model List</h2>
            {/* Models with Links: */}
            {
                modelList.map((thisModel, index) => (
                    <p key={index}>
                        <Link to={`/models/${thisModel._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>{ thisModel.attribute1 }</Link>
                        | 
                        <Link to={`/models/edit/${thisModel._id}`} style={{marginRight: ".5rem", marginLeft: ".5rem"}}>
                            Edit
                        </Link>
                        | 
                        <DeleteButton modelId={thisModel._id} 
                            successCallBack={() => removeFromDom(thisModel._id)} />
                    </p>
                ))
            }
        </div>
    )
}



export default DisplayAll;