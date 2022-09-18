
import { useState } from 'react';
import './index.css';
function State(){
    // const [text, setText]=useState('rahul');

    //  const changeName= () =>  {
    //        setText( 'mohit');
    //  }
const [text, setText]=useState(0);


const changeName=() =>{
    setText(text+1);
}
const changeMinus=() =>{
    setText(text-1);
}

    return(
        <>


<div className='ab'>

</div>

<button type='button' onClick={changeName}>++</button>
<input type="text" className='text' value={text}/>
<button type='button' onClick={changeMinus}>--</button>
</>
);
}
export default State;