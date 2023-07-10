import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Cards = (props) => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store } = useContext(Context);

	//<a href={props.url} className="btn btn-primary">Learn more!</a> pasaba datos detalles

	return (
		<div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/50/20" className="card-img-top" alt=""/> 
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.id}</p>
                <div className="m-1">
					
					<button type="button" className="btn btn-primary">Learn more!</button>
					<button type="button" className="btn btn-outline-warning ms-5"><i className="fa-regular fa-heart"></i></button>
				</div>
				
            </div>
        </div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
Cards.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
    id: PropTypes.string

};

/**
 * Define the default values for
 * your component's properties
 **/
Cards.defaultProps = {
	onDelete: null
};