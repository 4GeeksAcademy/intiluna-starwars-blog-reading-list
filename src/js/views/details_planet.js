import React, {useContext,useEffect} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const DetailPlanet = () => {
	
	const { store,actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	//llamamos a los contactos al iniciar pagina
	// useEffect(() => {
	// 	actions.getCharacters();
	// }, []);

	console.log(store.characters);

	return(
	

	<div className="text-center mt-5">
		<h2>Planet's detail</h2>
		
		<div className="container-fluid">
			<div className="row flex-row">
			
			</div>
		</div>
		
		
	</div>
);
};
