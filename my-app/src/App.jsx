import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListCointainer from './components/ItemListCointainer';


function App () {
  return (
     <div>
      <NavBar />
      <CartWidget />
      <ItemListCointainer />
     </div>
      
  )
}



export default App;
