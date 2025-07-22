
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function HomeScreen() {
  return <h1>home</h1>;
}
function ProfileScreen() {
  return <h1>profile</h1>;
}
function ShopScreen() {
  throw new Error("Shop error!");
}


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <ErrorBoundary>
            <HomeScreen />
          </ErrorBoundary>
        } />
        <Route path="/profile" element={
          <ErrorBoundary>
            <ProfileScreen />
          </ErrorBoundary>
        } />
        <Route path="/shop" element={
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
