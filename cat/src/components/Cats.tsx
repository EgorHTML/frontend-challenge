import React, { useEffect, useState, Suspense, lazy } from "react";
import { getData } from "./App";
const ImageCat = lazy(()=>import("./ImageCat"))

const defaultLimit = (window.innerWidth/200)*(window.innerHeight/200)
 

const Cats = (props:any) => {
    const [stateCats,setCats] = useState<any>([])
    const [scroll,setScroll] = useState(0)
    const [limit,setLimit] = useState(defaultLimit)
    
    useEffect(()=>{
        document.addEventListener("scroll",handler)
        function handler(){
            if(document.documentElement.scrollTop>scroll+window.innerHeight-0.5*window.innerHeight){
                setScroll(document.documentElement.scrollTop)
                setLimit(prev=>Math.floor(prev)+defaultLimit)
            }
        }
       return ()=>document.removeEventListener("scroll",handler)
    })

    useEffect(()=>{
            getData(limit).then(async (cats)=> {
                let data = await cats.json()
                setCats(data)
            })
    },[limit])
    
        return ( <Suspense fallback = { <h1>LLLoading</h1> }>
             <div>
            <ul className="cats">
                {stateCats.map((cat:any)=>{
                    if(cat.image){
                        return <li key={cat.id}>
                        <ImageCat name = {cat.name} src={cat.image.url}/>
                        <div onClick={()=>console.log("click")} className="like"></div>
                    </li>
                   
                    }
                })}
            </ul>
        </div> 
        </Suspense>)
}



export default Cats