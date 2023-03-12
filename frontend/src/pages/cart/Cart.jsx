import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import ShopNavbar from "../../components/Navbar";
import "./cart.css";
import Grid from "@mui/material/Grid";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, products, loadProducts } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  async function checkout() {
    let checkoutItems = [];
    products.forEach((product) => {
      if (cartItems[product.id] !== 0) {
        checkoutItems.push({
          price: product.priceId,
          quantity: cartItems[product.id],
        });
      }
    });
    console.log("checkoutItems", checkoutItems);
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: checkoutItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    loadProducts();
    console.log("cartItems: ", cartItems);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <ShopNavbar />
      <Container className="cart">
        <h1 className="mt-4">Your Cart Items</h1>
        <div className="cartItems">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <h5>Subtotal: ${totalAmount}</h5>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={checkout}>Checkout</button>
          </div>
        ) : (
          <Alert key={"warning"} variant={"warning"}>
            Your Shopping Cart is Empty
          </Alert>
        )}
      </Container>
    </>
  );
};

export default Cart;
