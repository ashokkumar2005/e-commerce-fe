<<<<<<< HEAD
import './index.css';
// FIX: BrowserRoute → BrowserRouter; also was importing App.css which doesn't exist
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======

import './App.css';
import {BrowserRoute,Routes,Route} from "react-router-dom";
>>>>>>> d0dcddc928af89daa3c953c7b9ada1b5727eb434
import Productdetails from "./pages/productsdetails.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/card.jsx";

function App() {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                {/* FIX: route path matches Link in productscard.jsx */}
                <Route path="/product/:id" element={<Productdetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
=======
  
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
>>>>>>> d0dcddc928af89daa3c953c7b9ada1b5727eb434
