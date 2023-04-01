import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
     //BEM convention 
    <Router>
    <div className="app">
     <Header/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
     </Routes>

     </div>
   </Router>
  );
}

export default App;
