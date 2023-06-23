import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const h1style={
  backgroundColor:'#A1B1C1',
  color:'tomato',
  padding:'20px'
};
// inline , internal and external css u can see below
const myVar=(<div style={{backgroundColor:"#999"}}> {/*inline */}
  <h1 style={h1style} className='heading'>Hello I am in JSX</h1> {/*internal */}
  <p className='para'>Hello{5+10}</p> {/*external */}
  </div>);
root.render(myVar);
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
  
// );

