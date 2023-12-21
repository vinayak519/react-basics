import { Fragment } from "react";

function Loader(props) {
    return (
        <Fragment>
            {props.title ? props.title : "Loading..."}
        </Fragment>
    );
}

export default Loader;