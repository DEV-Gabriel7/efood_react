import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu/:id" element={<Menu/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
)

export default Rotas