
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.title} />

        <span className="product-category">
          {product.category}
        </span>
      </div>

      <div className="product-details">

        <h3>{product.title}</h3>

        <div className="rating">
          <span>★</span>
          {product.rating.rate}
          <small>({product.rating.count} reviews)</small>
        </div>

        <div className="product-bottom">

          <h4>₹{product.price.toLocaleString("en-IN")}</h4>

          <button
            className="add-button"
            onClick={() => addToCart(product)}
          >
            + Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
