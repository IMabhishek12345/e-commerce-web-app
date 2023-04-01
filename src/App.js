import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
     //BEM convention 
    <Router>
    <div className="app">
     
     <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={[<Header/>,<Home/>]}/>
      <Route exact path="/checkout" element={[<Header/>,<Checkout/>]}/>
     </Routes>

     </div>
   </Router>
  );
}

export default App;
