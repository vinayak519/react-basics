import './App.css';
import { connect } from 'react-redux';
import { changeAppName } from './store/dispatch';
import Button from './Core/Button';
import Error from './Core/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Core/Layout';
import Dashboard from './Component/Dashboard';
import LatestMovies from './Component/LatestMovies';
import MovieDetails from './Component/MovieDetails';
import Booking from './Component/Booking';
import BookingComplete from './Component/BookingComplete';
import Events from './Component/Events';

function App(props) {
  const routes = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <Error />,
      // child route components
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "latest-movies",
          element: <LatestMovies />,
        },
        {
          path: "latest-movies/:id",
          element: <MovieDetails />,
        },
        {
          path: "book-now/:id",
          element: <Booking />,
        },
        {
          path: "booking-complete/:id",
          element: <BookingComplete />,
        },
        {
          path: "events",
          element: <Events />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={routes}>
      <div className="App">
        <h1>React Component: {props.store.appName}</h1>
        <i className='fa fa-chevron-right'></i>
        <Button onClick={() => props.changeName('Angular Js')}>Change Name</Button>
      </div >
    </RouterProvider>
  );
}

function mapStateToProps(state) {
  return ({
    store: state
  })
}

const mapDispatchToState = {
  changeName: changeAppName
}

export default connect(mapStateToProps, mapDispatchToState)(App);