import React, { useState } from 'react'

function Counter() {
    const [count, setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }
  return (
    <>
    <p>current count {count}</p>
    <button onClick={handleClick}>click me</button>
    </>
  )
}

export default Counter