import React, { useContext }  from "react";
import { Context } from "../store/appContext";
import { DetailCharacter } from "./details_character.js"
import { DetailPlanet } from "./details_planet.js"
import { DetailStarship } from "./details_starship.js"

import { useParams } from "react-router"


export const Details=()=>{
    const params = useParams()

    console.log(params.type==="planet"? "Planetas": "Otros")
// if type character return {<DetailCharacter/>}
    if (params.type==="character"){
        return (
            <DetailCharacter/>
        )
            
        
    } else if (params.type==="planet"){
        return (
            <DetailPlanet/>
        )

    } else if (params.type==="starship"){
        return (
            <DetailStarship/>
        )

    } else {
        return (
            <h2>Sorry, we did not found your page</h2>
        )
    }

}