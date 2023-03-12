import React, { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 4; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Featured");
  const [signedIn, setSignedIn] = useState(false);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("signup successful");
        setSignedIn(true);
      })
      .catch((e) => console.log(e));
  };

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("sign in successful");
        setSignedIn(true);
      })
      .catch((e) => console.log(e));
  }

  function signout() {
    return signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setSignedIn(false);
      })
      .catch((e) => console.log(e));
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function emailUpdate(email) {
    return updateEmail(currentUser, email);
  }

  function passwordUpdate(password) {
    return updatePassword(currentUser, password)
      .then(() => console.log("update successful"))
      .catch((e) => console.log(e));
  }

  function sortProducts(products) {
    if (sort === "Featured") {
      products.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (sort === "Price: Low to High") {
      products.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sort === "Price: High to Low") {
      products.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sort === "Name: Ascending (A to Z)") {
      products.sort((a, b) => {
        let aLower = a.name.toLowerCase();
        let bLower = b.name.toLowerCase();
        if (aLower < bLower) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (sort === "Name: Descending (Z to A)") {
      products.sort((a, b) => {
        let aLower = a.name.toLowerCase();
        let bLower = b.name.toLowerCase();
        if (bLower < aLower) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    return products;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loadProducts = async () => {
    try {
      const result = await getAllProducts();
      console.log(result.data);
      sortProducts(result.data);
      setProducts(result.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("CART ITEMS: ", cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    products,
    currentUser,
    search,
    sort,
    signedIn,
    emailUpdate,
    passwordUpdate,
    resetPassword,
    signout,
    sortProducts,
    setSort,
    setSearch,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    loadProducts,
    signup,
    login,
  };
  console.log("cart items", cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {!loading && props.children}
    </ShopContext.Provider>
  );
};

//export default ShopContextProvider;
