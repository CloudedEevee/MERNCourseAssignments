import React, { useState } from "react";
import { Link } from "react-router-dom";

const Root = (props) => {
    return(
        <div>
            <h1 style={{color: "Lavender"}}>Navigation</h1>
            <Link to={"/home"}>Home</Link>
        </div>
    );
}



export default Root