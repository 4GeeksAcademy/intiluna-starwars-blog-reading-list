import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img width="50" height="50" src="https://img.icons8.com/ios/50/star-wars.png" alt="star-wars"/></span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
				<li className="nav-item dropdown ">
          			<a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            			Favorites 0
          			</a>
          			<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            			<li><a className="dropdown-item" href="#">Action</a></li>
            			<li><a className="dropdown-item" href="#">Another action</a></li>
  				        
          			</ul>
        		</li>
			</div>
			

		</nav>
	);
};
