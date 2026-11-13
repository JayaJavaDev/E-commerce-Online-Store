import ProductCard from "./Productcard";

function ProductContainer({ products, addToCart }) {
  return (
    <section className="products-section" id="products">

      <div className="section-heading">
        <div>
          <p className="section-subtitle">CURATED FOR YOU</p>
          <h2>Explore Our Collection</h2>
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductContainer;