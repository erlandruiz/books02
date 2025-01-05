


import "./App.css";
import { NavBar, ItemCount, ItemListContainer } from "./components";
import { Details } from "./pages/Details";

import {Home} from './pages/Home'



function App() {
  const handleCart =(qty)=>{
    console.log("La cantidad es", qty)
  }




  return (
    <div>

        <NavBar />
        {/* <ItemListContainer gretting={"saludos"}/> */}
        {/* <Home/> */}
        {/* <ItemCount stock={10} onAdd={handleCart}/> */}
        <Details/>
       
   
    </div>
  );
}

export default App;
