import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products/Products';
import Home from './pages/home';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<LandingPage />}/>
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}

export default App;