import { useParams } from "react-router"

export const Details=()=>{
    const params = useParams()

    console.log(params.type==="planet"? "Planetas": "Otros")

    si type character return {<DetailCharacter/>}

}