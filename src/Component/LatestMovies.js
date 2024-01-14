import { Fragment } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/reducer";
import { Slide } from 'react-slideshow-image';
import Button from "../Core/Button";
import { NavLink } from "react-router-dom";

function LatestMovies() {
    const slidesToScroll = 1;
    const slidesToShow = 5;
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/all-movies')
            .then(response => {
                dispatch(action.getAllMovies(response.data))
            })
    }, []);

    return (
        <Fragment>
            <div className="container">
                <h4 className="mb-3 mt-5">Latest Movies</h4>
                {movies.allMovies.length !== 0 &&
                    <div className="row">
                        {movies.allMovies.map((item) => {
                            return (
                                <div key={item.id} className="col-md-3">
                                    <div className="card mb-5">
                                        <img className="card-image d-block" src={item.image} />
                                        <div className="card-body">
                                            <p className="card-title mb-0">{item.title}</p>
                                            <small className="d-block"><b>Rating:</b> <i className="fa fa-star text-warning"></i> {item.rating}</small>
                                            <small className="d-block mb-3"><b>Release Date:</b> {item.release}</small>
                                            <NavLink to={`/latest-movies/${item.id}`} className="btn btn-sm btn-primary" end={true}>Book Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </Fragment>
    );
}
export default LatestMovies;