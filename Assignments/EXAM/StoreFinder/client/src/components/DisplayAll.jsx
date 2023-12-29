import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const DisplayAll = (props) => {
    const { storeList, removeFromDom } = props;

    return (
        <div>
            <h2>Store List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Open?</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeList.length > 0 ?
                        storeList.map((thisStore, i) => (
                            <tr key={i}>
                                <td><Link to={`/stores/${thisStore._id}`}>{ thisStore.storeName }</Link></td>
                                <td>{ thisStore.number }</td>
                                <td>{ thisStore.isOpen ? "Yes" : "No" }</td>
                                <td><DeleteButton storeId={thisStore._id} 
                                        successCallBack={() => removeFromDom(thisStore._id)} /></td>
                            </tr>
                        )) 
                        : 
                        <tr>
                            <td colSpan={4}>No stores added yet. Click "Can't find your store?" to add one.</td>
                        </tr>
                    }
                    
                </tbody>
            </table>
        </div>
    )
}



export default DisplayAll;