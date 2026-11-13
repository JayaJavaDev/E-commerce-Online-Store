import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";

function ProductDetails({ product, onBack }) {

  const { addToCart } = useContext(MyContext);

  const [quantity, setQuantity] = useState(1);

  const totalPrice = product.price * quantity;

  return (
    <section className="details-page">

      <button className="back-button" onClick={onBack}>
        ← Back to Collection
      </button>

      <div className="details-container">

        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-info">

          <p className="category">{product.category}</p>

          <h1>{product.title}</h1>

          <div className="rating">
            <span className="stars">★★★★★</span>
            <span>{product.rating.rate}</span>
            <span>({product.rating.count} reviews)</span>
          </div>

          <h2>
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <p className="description">
            Discover timeless elegance with our premium
            collection. Designed to bring style and quality
            into your everyday life.
          </p>

          <div className="quantity-area">

            <label>Quantity</label>

            <div className="quantity-control">

              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>

            </div>

          </div>

          <div className="details-total">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </div>

          <button
            className="add-cart-large"
            onClick={() => {
              addToCart(product, quantity);
              setQuantity(1);
            }}
          >
            ADD TO CART
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;
