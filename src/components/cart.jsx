import { useState } from "react";

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
  onContinueShopping
}) {

  const [stockMessages, setStockMessages] = useState({});

  const handleIncrease = (item) => {

    if (item.quantity >= item.stock) {
      setStockMessages((prev) => ({
        ...prev,
        [item.id]: `This seller has only ${item.stock} Quantity`
      }));

      return;
    }

    setStockMessages((prev) => ({
      ...prev,
      [item.id]: ""
    }));

    increaseQuantity(item.id);
  };

  const handleDecrease = (id) => {

    setStockMessages((prev) => ({
      ...prev,
      [id]: ""
    }));

    decreaseQuantity(id);
  };

  const handleRemove = (id) => {

    setStockMessages((prev) => ({
      ...prev,
      [id]: ""
    }));

    removeItem(id);
  };

  return (
    <section className="cart-section">

      <div className="cart-heading">
        <div>
          <p className="section-subtitle">YOUR SELECTION</p>
          <h2>Shopping Cart</h2>
        </div>

        <button
          className="continue-button"
          onClick={onContinueShopping}
        >
          ← Continue Shopping
        </button>
      </div>

      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <span>🛍️</span>
          <h3>Your Cart is Empty</h3>
          <p>Discover something special and add it to your cart.</p>

          <button onClick={onContinueShopping}>
            Explore Products
          </button>
        </div>

      ) : (

        <>

          <div className="cart-list">

            {cartItems.map((item) => (

              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.title} />

                <div className="cart-item-info">

                  <h3>{item.title}</h3>

                  <p>
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>

                </div>

                <div className="quantity-control">

                  <button
                    onClick={() => handleDecrease(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>

                  {stockMessages[item.id] && (
                    <p className="stock-message">
                      {stockMessages[item.id]}
                    </p>
                  )}

                </div>

                <h3 className="item-total">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </h3>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Total Items</span>

              <span>
                {cartItems.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="summary-row total-row">
              <span>Total Amount</span>

              <span>
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              className="checkout-button"
              onClick={() => alert("Thank you for shopping with ZENVORA MART!")}
            >
              Proceed to Checkout
            </button>

          </div>

        </>

      )}

    </section>
  );
}

export default Cart;
