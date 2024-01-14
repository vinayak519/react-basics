import axios from "axios";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/reducer";
const imageUrl = '../Assets/Image/';

function Events() {
    const events = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(response => {
                dispatch(action.getAllEvents(response.data))
            })
    }, []);
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    {events.events.map((item) => {
                        return (
                            <div className="col-md-6" key={item.id}>
                                <div className="card mb-5">
                                    <img className="card-image d-block" src={item.image} />
                                    <div className="card-body">
                                        <p className="card-title mb-0">
                                            <i className="fa fa-angle-right"></i> {item.title}
                                        </p>
                                        <small className="d-block">{item.date}</small>
                                        <small>{item.location}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    );
}

export default Events;