import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Fcomponent from './demo/Fcomponent';
// import Rowcomponent from './demo/Rowcomponent';
import Product from './products/Product';
import ToDo from './todo/ToDo';



function App() {
  return (
    <div className="App">
      <ToDo /> <br />
      
        <Product name="Bananas" price="1" description="Fresh bananas from Ecuador" />
        <Product name="Apricot" price="1.5" description="Sweet apricots from Armenia" />

    </div>
  );
}

export default App;
