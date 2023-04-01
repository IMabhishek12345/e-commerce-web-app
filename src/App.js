import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
     //BEM convention 
    <Router>
    <div className="app">
     <Routes>
      <Route exact path="/" element={[<Header/>,<Home/>]}/>
      <Route exact path="/checkout" element={[<Header/>,<h1>Hi i am the checkout page</h1>]}/>
     </Routes>

     </div>
   </Router>
  );
}

export default App;
