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
				<div className="col">
					<img src="https://picsum.photos/400/200" className="myphoto ms-4 mt-4" alt="..."/> 
					
					
				</div>

				<div className="col">
					<h3>{store.detalle.name}</h3>
					<p className="col">sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
				</div>

			
			</div>

		</div>

			<hr></hr>

		<div className="container-fluid">

			<div className="row flex-row"></div>
			
				<div className="col">
					<h3>Name</h3>
					<p>{store.detalle.name}</p>
				</div>
			
				<div className="col">
					<h3>Birth Year</h3>
					<p>{store.detalle.birth_year}</p>
				</div>
			
				<div className="col">
					<h3>Gender</h3>
					<p>{store.detalle.gender}</p>
				</div>

				<div className="col">
					<h3>Height</h3>
					<p>{store.detalle.height}</p>
				
				</div>
				<div className="col">
					<h3>Skin Color</h3>
					<p>{store.detalle.skin_color}</p>
				</div>
				<div className="col">
					<h3>Eye Color</h3>
					<p>{store.detalle.eye_color}</p>
				</div>

			
		</div>
		
		
	</div>
);
};
