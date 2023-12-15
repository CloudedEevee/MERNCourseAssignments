import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = (props) => {
    const [pokeNames, setPokeNames] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                //Pokemon up to #807
                let pokedex = [...response.data.results];
                return setPokeNames(pokedex.map( thisPoke => thisPoke.name ));
            }).catch(err =>{
                console.log(err);
            });
    }, []);

        return(
            <div>
                <h2>Pokemon 1-807: </h2>
                <ol>
                    {
                        pokeNames.length > 0 && pokeNames.map((thisPoke, index) => (
                            <li key={index}>{thisPoke}</li>
                        ))
                    }
                </ol>
            </div>
        )
}



export default Pokemon;