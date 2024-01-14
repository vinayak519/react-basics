import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import QRCODE from '../Assets/Image/qrcode.png';


function BookingComplete() {
    const { id } = useParams();
    const movies = useSelector(state => state.movies);
    return (
        <Fragment>
            <div className="container mt-5">
                {
                    movies.allMovies.map((item) => {
                        if (item.id == id) {
                            return (
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img className="card-image" src={QRCODE} />
                                        <p>Scan QR Code for Movie Details and Seat Booking Details:</p>
                                    </div>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </Fragment>
    );
}
export default BookingComplete;