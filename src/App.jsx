import './index.css';
// FIX: BrowserRoute → BrowserRouter; also was importing App.css which doesn't exist
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from "./pages/productsdetails.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/card.jsx";

function App() {
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
