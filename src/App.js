import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './component/Home';
import Login from './component/Login';
import Details from './component/Details';
import Errror from './component/Errror';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
