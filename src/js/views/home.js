import React, {useContext,useEffect} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import { Context } from "../store/appContext";



export const Home = () => {
	
	const { store,actions } = useContext(Context);

	//llamamos a los contactos al iniciar pagina
	// useEffect(() => {
	// 	actions.getCharacters();
	// }, []);

	console.log(store.characters);

	return(
	

	<div className="text-center mt-5">
		<h2>Characters</h2>
		
		<div className="container-fluid">
			<div className="row flex-row flex-nowrap overflow-auto">
			{store.characters.length > 0
							? store.characters.map(item => (
									<Cards
										key={item.uid}
										name={item.name}
										url={item.url}
										id={item.uid}
										
									/>
							  ))
							: "Cargando ;)"}
			</div>
		</div>
		
		
	</div>
);
};
