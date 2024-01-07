import React, { useState, useEffect, useContext, useRef } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import Product from "./Product";
import ShopNavbar from "../../components/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeroBanner from "../hero/HeroBanner";

import Grid from "@mui/material/Grid";
// or
//import "./shop.css";

const Shop = () => {
  const { products, loadProducts, search, sort } = useContext(ShopContext);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    loadProducts();
    console.log("products", products);
  }, [sort]);

  return (
    <>
      <ShopNavbar page="shop" />

      <Container style={{ marginTop: "100px" }}>
        <div onClick={scrollToSection} style={{ cursor: "pointer" }}>
          <HeroBanner />
        </div>

        <div className="products-heading" ref={sectionRef}>
          <h2>Explore Products</h2>
        </div>
        <div className="shop my-3">
          <Grid container justify="center" spacing={4}>
            {products
              .filter((product) => product.name.toLowerCase().includes(search))
              .map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product data={product} />
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Shop;
