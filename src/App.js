import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart'
import { Toaster } from "react-hot-toast";
import './styles/app.scss'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
