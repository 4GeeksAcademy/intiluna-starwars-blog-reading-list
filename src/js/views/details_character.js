import React, {useContext,useEffect} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const DetailCharacter = () => {
	
	const { store,actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	//llamamos a detalle de contacto al iniciar pagina
	useEffect(() => {
	 	actions.getDetalle(params.id);
	 }, []);

	console.log(store.detalle);

	return(
	

	<div className="text-center mt-5">
		<h2>Character's detail</h2>
		
		<div className="container-fluid">
			<div className="row flex-row">
				<div className="espacio-imagen-detalle">
					<img src="https://picsum.photos/200/100" className="imagen_detalle" alt=""/> 
				</div>
				<div>
					<h3>{store.detalle.name}</h3>
					<p>sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
				</div>
			
			</div>
			
			<div className="container-fluid">
			<div className="row flex-row">
				<div>
					<h3>Name</h3>
					<p>{store.detalle.name}</p>
				</div>
				
				<div>
					<h3>Birth Year</h3>
					<p>{store.detalle.birth_year}</p>
				</div>
				
				<div>
					<h3>Gender</h3>
					<p>{store.detalle.gender}</p>
				</div>
				
				<h3>Height</h3>
				<p>{store.detalle.height}</p>
				<h3>Skin Color</h3>
				<p>{store.detalle.skin_color}</p>
				<h3>Eye Color</h3>
				<p>{store.detalle.eye_color}</p>
			</div>
			
			</div>

		</div>
		
		
	</div>
);
};
