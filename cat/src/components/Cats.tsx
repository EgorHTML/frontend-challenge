import React, { useEffect, useState, Suspense } from "react";
import ImageCat from "./ImageCat";

function getData(){
    return fetch(`https://api.thecatapi.com/v1/breeds`,
        {
            method:"GET",
            headers:{"x-api-key":"8a9ac082-a8ab-4805-b148-d4aaf734e389"}
        })
        
} 

const Cats = () => {
    const [stateCats,setCats] = useState<any>([])

    useEffect(()=>{
            getData().then(async (cats)=> {
                let data = await cats.json()
                setCats(data)
            })
    },[])
    
    return ( <div>
        <ul className="cats">
            {stateCats.map((cat:any)=>{
                if(cat.image){
                    return <li key={cat.id}>
                    <ImageCat name = {cat.name} src={cat.image.url}/>
                </li>
                }
               
            })}
        </ul>
    </div> )
}



export default Cats