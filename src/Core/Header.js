import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="dashboard" className="navbar-brand" href="#">REACT <sup><small>IMDB</small></sup></NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="latest-movies" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Latest Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Events</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;