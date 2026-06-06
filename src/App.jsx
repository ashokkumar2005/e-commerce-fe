
import './App.css';
import {BrowserRoute,Routes,Route} from "react-router-dom";
import Productdetails from "./pages/productsdetails.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/card.jsx";

function App() {
  
  return(
    <BrowserRoute>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/card" element={<Cart/>}></Route>
            <Route path="/productdetails" element={<Productdetails/>}></Route>
        </Routes>
    
    </BrowserRoute>
  )
}

export default App
