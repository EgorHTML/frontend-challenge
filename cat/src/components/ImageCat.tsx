import React from "react";

const ImageCat = (props:{name:string,src:string}) => {
    const {name,src} = props
    return <img src={src} alt={name} />
}

export default ImageCat