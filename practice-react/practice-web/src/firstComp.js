import React from 'react'
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
function FirstComp(){
    const listItem=products.map((obj)=>{
        return <li key={obj.id}>{obj.title}</li>
    });
    return (
        <ul>
            {listItem}
        </ul>
    )
}

export default FirstComp;