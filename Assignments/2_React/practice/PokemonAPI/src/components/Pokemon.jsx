import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
    const [pokeNames, setPokeNames] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                //HTTP response
                    // console.clear() //clearing console log for faster debugging
                    return response.json();
                })
                .then(response => {
                    //Pokemon up to #807
                    let pokedex = [...response.results];
                    return setPokeNames(pokedex.map( thisPoke => thisPoke.name ));
                    // console.log(`pokedex = ${pokedex}`)
                    // console.log(`pokeNames = ${pokeNames}`)
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