import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ShopContext } from "../context/ShopContextProvider";
import NavDropdown from "react-bootstrap/NavDropdown";

const ShopNavbar = (props) => {
  const {
    search,
    setSearch,
    sort,
    setSort,
    signout,
    currentUser,
    signedIn,
    login,
  } = useContext(ShopContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="px-3">
        E-Shop
      </Navbar.Brand>
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
                  <NavDropdown.Item as={Link} to="/" onClick={() => signout()}>
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item as={Link} to="/login" onClick={() => login()}>
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
    </Navbar>
  );
};

export default ShopNavbar;
