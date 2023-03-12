import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Orders = () => {
  const { signedIn } = useContext(ShopContext);
  return <div>Orders</div>;
};

export default Orders;
