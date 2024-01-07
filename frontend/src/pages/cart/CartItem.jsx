import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col } from "react-bootstrap";

const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <Card
      style={{
        // width: "50rem",
        display: "flex",
        flexDirection: "row",
        height: "13rem",
      }}
      className="cartItem"
    >
      <Card.Img
        variant="top"
        src={props.data.imageUrl}
        className="ms-4 me-2"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        // style={{ height: "7rem" }}
      />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>${props.data.price}</Card.Text>
        <ButtonGroup className="me-2" aria-label="First group">
          <Button
            variant="outline-dark"
            onClick={() => removeFromCart(props.data.id)}
          >
            -
          </Button>
          <div
            style={{
              paddingRight: "1rem",
              paddingLeft: "1rem",
              borderTop: "solid black 1px",
              borderBottom: "solid black 1px",
              height: "2.5rem",
              lineHeight: "2.5rem",
            }}
          >
            {cartItems[props.data.id]}
          </div>
          <Button
            variant="outline-dark"
            onClick={() => addToCart(props.data.id)}
            // style={{ width: "100%" }}
          >
            +
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
