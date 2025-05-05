import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(ShopContext);

  return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
