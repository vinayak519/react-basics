import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
    return (
        <Fragment>
            <Header></Header>
            <main className="main-wrapper">
                <Outlet />
            </main>
            <Footer></Footer>
        </Fragment>
    );
}

export default Layout;