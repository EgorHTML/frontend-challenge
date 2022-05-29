import React, { lazy, Suspense } from 'react';
import NavBar from "./NavBar";
import "../style/main.css"
const Cats = lazy(()=>import("./Cats"));

 

const App = () => {
  return ( <div>
      <NavBar/>
      <Suspense fallback = { <div>Loading...</div> }>
        <Cats/>
      </Suspense>
      
  </div> )
}

export default App   