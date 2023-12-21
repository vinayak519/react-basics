import './App.css';
import { connect } from 'react-redux';
import { changeAppName } from './store/dispatch';
import Button from './Core/Button';

function App(props) {
  return (
    <div className="App">
      <h1>React Component: {props.store.appName}</h1>
      <i className='fa fa-chevron-right'></i>
      <Button onClick={() => props.changeName('Angular Js')}>Change Name</Button>
    </div >
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