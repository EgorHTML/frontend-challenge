import React, { lazy, Suspense } from 'react';
import NavBar from "./NavBar";
import "../style/main.css"
const Cats = lazy(()=>import("./Cats"));

export function getData(limit:number){ 
  return fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}`,
      {
          method:"GET",
          headers:{"x-api-key":"8a9ac082-a8ab-4805-b148-d4aaf734e389"}
      })
      
}


const App = () => {
  return ( <div>
      <NavBar/>
      <Suspense fallback={ <h1>Loading...</h1> }>
        <Cats/>
      </Suspense>
      
  </div> )
}

export default App   