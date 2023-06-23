import React from "react";
// import ResponseToEvent from "./responseToEvent";
// import UseOfProps from "./useOfProps";
// import Counter from "./Counter";
// import Fruits from "./component/Fruits";
// import Cars from "./component/Cars";
// import Child1 from "./component/Child1";
// import Child2 from "./component/Child2";
import InputUsingUseRef from "./component/InputUsingUseRef";
// function App(){
//     const [count, setCount]=useState(0);
//     function handleClick(){
//         setCount(count+1);
//     }
//     return (
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ResponseToEvent count={count} onClick={handleClick}/>
//         <ResponseToEvent count={count} onClick={handleClick}/>
//         </>
//     );
// }
// const carInfo={
//     brand:"vw", name:"polo", make:2010
// }

function App(){
    // const [countParent, setCountParent]=useState(0);
    // function getUpdatedFromChild1(v){
    //     setCountParent(v);
    // }
    return(
        <div>
            {/* <UseOfProps brand={carInfo}/>
            <UseOfProps brand={21998} />
            <Counter/>*/}
            {/* <Fruits/> */}
            {/* <Cars color={"white"}/>  */}
            {/* <p>count parent: {countParent}</p>
            <Child1 onCountInChild1={getUpdatedFromChild1}/>
            <Child2 onCountInParent={countParent}/> */}
            <InputUsingUseRef />
        </div>
    );
}

export default App;