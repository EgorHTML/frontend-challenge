import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import FavoriteCats from './components/FavoriteCats';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
   
  <Routes>
      <Route path="/" element={ <App/> }/>
      <Route path="/favoriteCats" element={<FavoriteCats/>}/>
  </Routes>
</BrowserRouter>
);


