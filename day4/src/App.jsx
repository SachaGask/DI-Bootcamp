import './App.css'
import Home from './components/Home';
import Shop from './components/Shop';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Link to="/home" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/shop">Shop</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App;