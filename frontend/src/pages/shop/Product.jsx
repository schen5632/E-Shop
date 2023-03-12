import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/ShopContextProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[props.data.id];
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.data.imageUrl}
        style={{ height: "10rem" }}
      />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>${props.data.price}</Card.Text>
        <Button variant="outline-dark" onClick={() => addToCart(props.data.id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </Button>
      </Card.Body>
    </Card>
    // <div className="product">
    //   <img src={props.data.imageUrl} />
    //   <div className="description">
    //     <p>
    //       <b>{props.data.name}</b>
    //     </p>
    //     <p>${props.data.price}</p>
    //   </div>
    //   <button
    //     className="addToCartBttn"
    //     onClick={() => addToCart(props.data.id)}
    //   >
    //     Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
    //   </button>
    // </div>
  );
};

export default Product;
