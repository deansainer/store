import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar/Navbar";
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
