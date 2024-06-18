import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = { <Home/> } ></Route>
        <Route path='/sobre' element = { <Sobre/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
