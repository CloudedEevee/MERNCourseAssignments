import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return(
        <div>
            <h1 style={{color: "Lavender"}}>Welcome Home</h1>
            <p>Please enter "/4", or any number of your choice, in url in place of "/home" for Num route.</p>
            <p>Please enter "/word", or any word of your choice, in url in place of "/home" for Word route.</p>
            <p>Please enter "/word/color/backgroundColor" of your choice, in url in place of "/home" for Word styling.</p>
        </div>
    );
}



export default Home