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
  for (let i = 1; i < 100; i++) {
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
  const [status, setStatus] = useState("");
  const temp = [
    {
      id: 1,
      priceId: "price_1MhcOYEutmLY32PU8PfRV9uR",
      name: 'MacBook Pro 14"',
      price: 2599.0,
      imageUrl:
        "https://www.macworld.com/wp-content/uploads/2023/01/2023-MacBook-Pro-models-13.jpg?quality=50&strip=all",
      category: "laptops",
    },
    {
      id: 2,
      priceId: "price_1MhcQoEutmLY32PUZfFOSNEE",
      name: 'iPad Pro 11"',
      price: 1099.0,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670865949101",
      category: "ipads",
    },
    {
      id: 3,
      priceId: "price_1MhcT0EutmLY32PUOB5MmDeA",
      name: "iPhone 14 Pro",
      price: 1399.0,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578",
      category: "smartphones",
    },
    {
      id: 4,
      priceId: "price_1MntqsEutmLY32PU4kVfO8cE",
      name: "AirPods Pro",
      price: 329.0,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
      category: "headphones",
    },
    {
      id: 5,
      priceId: "price_1MoGS0EutmLY32PUFCEI1DiI",
      name: "Beats Studio3 Wireless Headphones",
      price: 249.0,
      imageUrl:
        "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png",
      category: "headphones",
    },
    {
      id: 8,
      priceId: "price_1MoGWUEutmLY32PUPU8UG8AD",
      name: "Sony WH-1000XM5 Wireless Headphones",
      price: 499.0,
      imageUrl:
        "https://www.sony.ca/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
      category: "headphones",
    },
    {
      id: 9,
      priceId: "price_1MoGiREutmLY32PUmOxr0s2H",
      name: "Sennheiser HD560s Audiophile Headphones",
      price: 229.0,
      imageUrl:
        "https://www.thepowercentre.ca/files/image/attachment/15804/HD560S.jpg",
      category: "headphones",
    },
    {
      id: 10,
      priceId: "price_1MoGmfEutmLY32PUnh6wnANP",
      name: "Sennheiser HD600 Audiophile Headphones",
      price: 519.0,
      imageUrl:
        "https://cdn.long-mcquade.com/files/8293/md_eb7f1d3c528c0e0a4ac42d4e40a326e1.jpg",
      category: "headphones",
    },
  ];

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function emailUpdate(email) {
    return updateEmail(currentUser, email);
  }

  function passwordUpdate(password) {
    return updatePassword(currentUser, password);
    // .then(() => console.log("update successful"))
    // .catch((e) => console.log(e));
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
      // Get from backend
      //const result = await getAllProducts();
      // console.log("products in load products", result);
      // sortProducts(result.data);
      // setProducts(result.data);

      // get from const
      console.log("getting from cache!");
      sortProducts(temp);
      setProducts(temp);
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
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
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
    setSignedIn,
    emailUpdate,
    passwordUpdate,
    resetPassword,
    sortProducts,
    setSort,
    setSearch,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    loadProducts,
  };
  console.log("cart items", cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {!loading && props.children}
    </ShopContext.Provider>
  );
};

//export default ShopContextProvider;
