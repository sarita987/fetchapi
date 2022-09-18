
import { useState } from 'react';
import React from 'react';
import {FiHeart} from "react-icons/fi";

//import Card from './Card';

 function Color() {

  const [like, setLike] = useState(false);


  
  return (
    <>
    
    <h2 onClick={()=>setLike((prevLike) => !prevLike)}>
      like: {like ? <img src='https://png.pngitem.com/pimgs/s/83-839612_white-heart-clipart-white-love-heart-vector-hd.png'/>
       :
       <img src='https://www.freepnglogos.com/uploads/heart-png/heart-image-13.png'/>}
    </h2>
    
    </>
  );
}


 











  
export default Color;


