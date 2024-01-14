import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import Button from "../Core/Button";

function MovieDetails() {
    const { id } = useParams();
    const movies = useSelector(state => state.movies);
    return (
        <Fragment>
            <div className="container mt-5">
                {
                    movies.allMovies.map((item) => {
                        if (item.id == id) {
                            return (
                                <div key={item.id} className="row">
                                    <div className="col-md-8">

                                        <div className="row">
                                            <div className="col-md-6">
                                                <img className="card-image" src={item.image} />
                                            </div>
                                            <div className="col-md-6">
                                                <h4>{item.title}</h4>
                                                <p>Movie Story: {item.description}</p>
                                                <p>Relesae Date: {item.release}</p>
                                                <p>Rating: {item.rating}</p>
                                                <p>{item.genre.map((genreItem) => {
                                                    return (
                                                        <span key={genreItem.id}>{genreItem}, </span>
                                                    )
                                                })}</p>
                                                <p>Cast:
                                                    {item.stars.map((genreItem) => {
                                                        return (
                                                            <span key={genreItem.id}> {genreItem}, </span>
                                                        )
                                                    })}
                                                </p>

                                                <NavLink to={`/book-now/${item.id}`} className="btn btn-sm btn-primary" end={true}>Book Now <i className="fa fa-angle-right"></i></NavLink>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <h4>Movie Trailer</h4>
                                        <iframe width="100%" height="300" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            )
                        }
                    })
                }


                <div className="row mt-5">
                    <div className="col-md-12">
                        <h4>Other Movies</h4>
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
                </div>
            </div>
        </Fragment>
    );
}

export default MovieDetails;