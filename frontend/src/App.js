import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopNavbar from "./components/Navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import UpdateProfile from "./pages/auth/UpdateProfile";
import PrivateRoute from "./pages/auth/PrivateRoute";
import { ShopContextProvider } from "./context/ShopContextProvider";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/" element={<Shop />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
