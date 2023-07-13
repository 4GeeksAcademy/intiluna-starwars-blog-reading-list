import React, {useContext,useEffect} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const DetailPlanet = () => {
	
	const { store,actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	//llamamos a detalle de contacto al iniciar pagina
	useEffect(() => {
	 	actions.getDetalle(params.type,params.id);
		
	 }, []);

	console.log(store.detalle);

	return(
	

<div className="text-center mt-5">
		<h2>Planet's detail</h2>
		
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

		<hr className="text-danger"></hr>

			

		<div className="container-fluid">

			<div className="row flex-row text-danger">
				<div className="col">
					<h5>Name</h5>
					<p>{store.detalle.name}</p>
				</div>
			
				<div className="col">
					<h5>Diameter</h5>
					<p>{store.detalle.diameter}</p>
				</div>
			
				<div className="col">
					<h5>Rotation Period</h5>
					<p>{store.detalle.rotation_period}</p>
				</div>

				<div className="col">
					<h5>Orbital Period</h5>
					<p>{store.detalle.orbital_period}</p>
				
				</div>
				<div className="col">
					<h5>Gravity</h5>
					<p>{store.detalle.gravity}</p>
				</div>
				<div className="col">
					<h5>Population</h5>
					<p>{store.detalle.population}</p>
				</div>
				<div className="col">
					<h5>Climate</h5>
					<p>{store.detalle.climate}</p>
				</div> 
			</div>
			
				

			
		</div>
		
		
	</div>
);
};
