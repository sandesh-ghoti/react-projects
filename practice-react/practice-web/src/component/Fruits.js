import React, { useState } from 'react'
import SingleFruits from './SingleFruits';
// take input from user and add that to page in list format
function Fruits() {
    const [fruit, setFruit]=useState(['apple']);
    const [inputText, setInputText]=useState('');
    function clickHandler(){
        setFruit([...fruit, inputText]);
    }
    function changeHandler(event){
        const input=event.target.value;
        setInputText(input);
    }

  return (
    <div>
        <label htmlFor="fruits"><strong>Add fruits</strong></label>
        <input type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>add</button>
        <ul>
            {fruit.map((fr, idx)=>{
                return(
                    // <li key={idx}>{fr}</li>
                    <li key={idx}> <SingleFruits fr={fr}/></li>
                )
            })}
        </ul>
    </div>
  )
}

export default Fruits