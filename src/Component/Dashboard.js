import axios from "axios";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/reducer";
import { Slide } from 'react-slideshow-image';
import Button from "../Core/Button";
import { NavLink } from "react-router-dom";

import slider1 from '../Assets/Image/slider-1.jpg';
import slider2 from '../Assets/Image/slider-2.jpg';
import slider3 from '../Assets/Image/slider-3.jpg';
import slider4 from '../Assets/Image/slider-4.jpg';
import slider5 from '../Assets/Image/slider-5.jpg';

function Dashboard() {

    const slidesToScroll = 1;
    const slidesToShow = 1;
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
            {movies.allMovies.length !== 0 && <Slide slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} indicators={false}>
                <img src={slider1} />
                <img src={slider2} />
                <img src={slider3} />
                <img src={slider4} />
                <img src={slider5} />
            </Slide>}


            {/* RECOMMENDED MOVIES SECTION */}
            <div className="container mt-5 mb-5">
                <h4 className="mb-3">Recommended Movies</h4>
                {movies.allMovies.length !== 0 && <Slide slidesToScroll={1} slidesToShow={4} indicators={false}>
                    {movies.allMovies.map((item) => {
                        return (
                            <div key={item.id}>
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
                </Slide>}
            </div>
        </Fragment>
    );
}

export default Dashboard;