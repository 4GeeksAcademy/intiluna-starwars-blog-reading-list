import React, {useContext,useEffect} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const DetailStarship = () => {
	
	const { store,actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	//llamamos a detalle de contacto al iniciar pagina
	useEffect(() => {
	 	actions.getDetalle(params.type,params.id);
		
	 }, []);

	//console.log(store.detalle);

	return(
	

		<div className="text-center mt-5">
		<h2>Starship's detail</h2>
		
		<div className="container-fluid">
			<div className="row flex-row">
				<div className="col">
					<img src="https://picsum.photos/400/200" className="myphoto ms-4 mt-4" alt="..."/> 
					
					
				</div>

				<div className="col">
					<h3>{JSON.parse(localStorage.getItem("detalle")).name}</h3>
					<p className="col">sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
				</div>

			
			</div>

		</div>

		<hr className="text-danger"></hr>

			

		<div className="container-fluid">

			<div className="row flex-row text-danger">
				<div className="col">
					<h5>Name</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).name}</p>
				</div>
			
				<div className="col">
					<h5>Model</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).model}</p>
				</div>
			
				<div className="col">
					<h5>Starship Class</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).starship_class}</p>
				</div>

				<div className="col">
					<h5>Manufacturer</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).manufacturer}</p>
				
				</div>
				<div className="col">
					<h5>Crew</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).crew}</p>
				</div>
				<div className="col">
					<h5>Passengers</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).passengers}</p>
				</div>
				<div className="col">
					<h5>Hyperdrive rating</h5>
					<p>{JSON.parse(localStorage.getItem("detalle")).hyperdrive_rating}</p>
				</div> 
			</div>
			
				

			
		</div>
		
		
	</div>
);
};
