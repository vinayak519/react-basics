import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function Booking() {
    const { id } = useParams();
    const movies = useSelector(state => state.movies);

    const onFormSubmit = (event) => {
        console.log(event.target.value)
    }

    return (
        <Fragment>
            <div className="container mt-5">
                {
                    movies.allMovies.map((item) => {
                        if (item.id == id) {
                            return (
                                <div key={item.id} className="row">
                                    <div className="col-md-6">
                                        <img className="card-image" src={item.image} />
                                        <h4 className="mt-3">{item.title}</h4>
                                        <p>Rating: {item.rating}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Booking Details</h4>
                                        <p>Fill required details below for booking movie:</p>
                                        <form method="POST" className="row" onSubmit={(event) => onFormSubmit(event)}>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                                <input type="fullname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label htmlFor="exampleInputEmail1">Date Of Booking</label>
                                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">Available Show Timings</label>
                                                <select className="form-control">
                                                    <option>Select Timings</option>
                                                    <option value="1">9:00 to 12:00</option>
                                                    <option value="2">12:00 to 03:00</option>
                                                    <option value="3">03:00 to 06:00</option>
                                                    <option value="4">06:00 to 9:00</option>
                                                    <option value="5">09:00 to 12:00</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="exampleInputEmail1">Choose Seats</label>
                                                <select className="form-control">
                                                    <option>Select Seats</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-12 mt-3">
                                                <NavLink to={`/booking-complete/${item.id}`} className="btn btn-primary d-block">Book & Pay</NavLink>
                                            </div>

                                        </form>
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

export default Booking;