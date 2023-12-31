import logo from './logo.svg';
import './App.css';
import { CountryList } from './Component/CountryList';

function App() {
  return (
    <div className="App">
      <h1>React Component</h1>
      <i className='fa fa-chevron-right'></i>
      <CountryList></CountryList>
    </div>
  );
}

export default App;
