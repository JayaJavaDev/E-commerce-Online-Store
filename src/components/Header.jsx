function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">

        <h1 className="logo">
          𝐙envora<span>Ⓜart</span>
        </h1>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#footer">About</a>
        </nav>

        <button className="cart-button" onClick={onCartClick}>
          <span>🛒</span>
          Cart
          <span className="cart-count">{cartCount}</span>
        </button>

      </div>
    </header>
  );
}

export default Header;
