import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import ShopNavbar from "../../components/Navbar";
import {
  Table,
  Container,
  Card,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";

const Orders = () => {
  return (
    <>
      <ShopNavbar />
      <Container style={{ marginTop: "100px" }}>
        <h1 className="mt-4 mb-3">Your Orders</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>Order Placed: </th>
              <th>Total Price: </th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* Macbook
                <Image
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202"
                  alt="test"
                  style={{ height: "7rem", width: "7rem" }}
                  className="m-3"
                ></Image> */}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Orders;
