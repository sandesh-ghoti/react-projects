import React, { useState } from 'react'


function Child1(props) {
    const [count, setCount]=useState(0);
    function update(){
        setCount(count+1);
        props.onCountInChild1(count+1);
    }
    
  return (
    <>
        <p>{count}</p>
        <button onClick={update}>click me</button>
    </>
  )
}

export default Child1