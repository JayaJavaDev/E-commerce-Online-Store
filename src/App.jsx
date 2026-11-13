import { useState, useContext } from "react";

import { MyContext } from "./MyContext";
import productsData from "./data/productsData.json";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Cart from "./components/cart";
import ProductContainer from "./components/ProductContainer";

import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalQuantity,
    totalPrice
  } = useContext(MyContext);

  const products = productsData.products;

  return (
    <div className="app">

      <Header
        cartCount={totalQuantity}
        onCartClick={() => setShowCart(!showCart)}
      />

      {!showCart && <Banner />}

      <main className="main-container">

        {showCart ? (
          <Cart
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
            totalPrice={totalPrice}
            onContinueShopping={() => setShowCart(false)}
          />
        ) : (
          <ProductContainer
            products={products}
            addToCart={addToCart}
          />
        )}

      </main>

      <footer className="footer" id="footer">
        <p>© 2026 Zenvora Mart. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
