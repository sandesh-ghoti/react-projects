import React, { useState } from 'react'

const [car, setCarColor]=useState({
    model:"Innova",
    make: 2018,
    color: "red"
})
function Cars(props) {

  return (
    <>
        {setCarColor({...car,color: props.color})}
        <div>do what u want to do</div>
    </>
  )
}

export default Cars;