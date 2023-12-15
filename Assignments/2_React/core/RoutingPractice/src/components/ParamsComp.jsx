import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ParamsComp = (props) => {
    const { word, color, bkg } = useParams();
    return(
        <div>

            {
                isNaN(word) ?
                <div>
                    <h1 style={
                        color?
                            {color: color, backgroundColor: bkg} 
                            : {color: "lavender" }
                    }>
                        Your Word: { word }
                    </h1>
                    <Link to={"/home"}>Home</Link>
                </div>
                :
                <div>
                    <h1>Your Number: { word }</h1>
                    <Link to={"/home"}>Home</Link>
                </div>
            }   

        </div>
    );
}



export default ParamsComp