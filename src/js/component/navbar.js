import React, { useContext }  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = (props) => {
	
	const { store,actions } = useContext(Context);
	console.log(store.favoritos);

	function handleDeleteFavorito(e) {
		e.preventDefault();
		console.log(e)	
		//actions.deleteFromFavoritos(props.name)
		}
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img width="50" height="50" src="https://img.icons8.com/ios/50/star-wars.png" alt="star-wars"/></span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
					bkup <a className="dropdown-item" href="#">{item} <i className="fa-solid fa-trash"></i></a>
					<button type="button" className="btn btn-outline-warning ms-5" onClick={e => handleDeleteFavorito(e)}><i className="fa-solid fa-trash"></i>{item}</button>
				</Link> */}
				<li className="nav-item dropdown ">
          			<a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            			Favorites {store.favoritos.length}
          			</a>
          			<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
					  {store.favoritos.length > 0
							? store.favoritos.map(item => (
								<li key={item} >
										
									<a className="dropdown-item" href="#" onClick={e => handleDeleteFavorito(e)}>{item} <i className="fa-solid fa-trash"></i></a>
								</li>
								
							  ))
							: "(empty)"}
						
            			
  				        
          			</ul>
        		</li>
			</div>
			

		</nav>
	);
};
