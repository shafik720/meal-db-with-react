import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Body from './Components/Body/Body';

function App() {
  return (
    <div>
      <Header></Header>   
      <Body></Body>   
    </div>
  );
}

export default App;
