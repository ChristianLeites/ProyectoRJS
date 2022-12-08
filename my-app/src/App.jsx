import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import NavBar from './components/NavBar';
import ItemListCointainer from './components/ItemListCointainer';


function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='productos' element={<Productos/>}/>
        </Routes>
      </BrowserRouter>
      <ItemListCointainer
        nombre="Christian"
        apellido="Leites"
     />
    </div>  
  )
}



export default App;
