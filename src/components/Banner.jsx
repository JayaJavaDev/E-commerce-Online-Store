function Banner() {
  return (
    <section className="banner" id="home">

      {/* LEFT CONTENT */}
      <div className="banner-content">

        <p className="banner-tag">
          ✦ ELEVATE YOUR EVERYDAY
        </p>

        <h1>
          Style Redefined
          <br />
          <span>for You.</span>
        </h1>

        <p className="banner-description">
          Discover a world of elegance with our exclusive
          collection of fashion, accessories and lifestyle
          essentials. Bring style and quality into every moment.
        </p>

        <a href="#products" className="banner-button">
          Shop Now <span>→</span>
        </a>

        <div className="banner-features">
          <span>✦ Premium Collection</span>
          <span>✦ Timeless Style</span>
        </div>

      </div>

      {/* RIGHT PRODUCT SHOWCASE */}
      <div className="banner-visual">

        <div className="banner-shape"></div>

        
        <div className="showcase-main">
          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900"
            alt="Elegant handbag"
          />
        </div>

        
        <div className="showcase-watch">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
            alt="Premium wrist watch"
          />
        </div>

        {/* SUNGLASSES */}
        <div className="showcase-sunglasses">
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
            alt="Fashion sunglasses"
          />
        </div>

        {/* DISCOUNT */}
        <div className="discount-badge">
          <span>UP TO</span>
          <strong>50%</strong>
          <span>OFF</span>
        </div>

        {/* IMAGE CAPTION */}
        <div className="showcase-caption">
          <span>THE STYLE EDIT</span>
          <p>Elegance in every detail.</p>
        </div>

      </div>

    </section>
  );
}

export default Banner;
