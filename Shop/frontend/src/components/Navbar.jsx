import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ShopContext } from "../context/ShopContextProvider";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { setSignedIn } from "../pages/auth/signedInSlice";
import auth from "../firebase";
import { signOut } from "firebase/auth";

const ShopNavbar = (props) => {
  const {
    search,
    setSearch,
    sort,
    setSort,
    // signout,
    currentUser,
    // signedIn,
    login,
  } = useContext(ShopContext);
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn.value);
  function signout() {
    return signOut(auth)
      .then(() => {
        console.log("sign out successful");
        dispatch(setSignedIn(false));
      })
      .catch((e) => console.log(e));
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/" className="px-3">
        E-Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {props.page === "shop" && (
          <>
            <input
              type="text"
              placeholder="Search E-Shop..."
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <Nav>
              <NavDropdown title={`Sort by: ${sort}`} id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    setSort("Featured");
                  }}
                >
                  Featured
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setSort("Price: Low to High");
                  }}
                >
                  Price: Low to High
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setSort("Price: High to Low");
                  }}
                >
                  Price: High to Low
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setSort("Name: Ascending (A to Z)");
                  }}
                >
                  Name: Ascending (A to Z)
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setSort("Name: Descending (Z to A)");
                  }}
                >
                  Name: Descending (Z to A)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        )}
        {props.page !== "auth" && (
          <Navbar.Collapse className="justify-content-end px-3">
            <Nav>
              {signedIn ? (
                <Navbar.Text className="mx-3">
                  Signed in as: {currentUser.email}
                </Navbar.Text>
              ) : (
                <Navbar.Text className="mx-3">Currently signed out</Navbar.Text>
              )}

              <NavDropdown title="Account" id="basic-nav-dropdown">
                {signedIn ? (
                  <>
                    <NavDropdown.Item as={Link} to="/update-profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/"
                      onClick={() => signout()}
                    >
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <ShoppingCartOutlinedIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ShopNavbar;
