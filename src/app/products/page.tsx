import Navbar from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Products() {
  return (
    <>
      <Navbar />
      <main className="products">
        <section className="products-intro">
          <h2 className="products-title">Our Chocolate Collection</h2>
          <p className="products-subtitle">Explore a range of delicious handcrafted chocolates.</p>
        </section>

        <section className="product-list">
          {/* Product Items */}
          <div className="product-item">
            <img src="/chocolate-3.jpg" alt="Premium chocolate" className="product-img" />
            <figcaption className="product-name">Premium Dark Chocolate</figcaption>
            <p className="product-price">$25.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-4.jpg" alt="Assorted chocolates" className="product-img" />
            <figcaption className="product-name">Assorted Chocolates</figcaption>
            <p className="product-price">$30.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-1.jpg" alt="Delicious chocolate" className="product-img" />
            <figcaption className="product-name">Classic Milk Chocolate</figcaption>
            <p className="product-price">$20.99</p>
          </div>
          {/* Add 7 more products */}
          <div className="product-item">
            <img src="/chocolate-5.jpg" alt="Chocolate Truffles" className="product-img" />
            <figcaption className="product-name">Chocolate Truffles</figcaption>
            <p className="product-price">$15.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-6.jpg" alt="Caramel Filled Chocolate" className="product-img" />
            <figcaption className="product-name">Caramel Filled Chocolate</figcaption>
            <p className="product-price">$18.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-7.jpg" alt="White Chocolate" className="product-img" />
            <figcaption className="product-name">White Chocolate</figcaption>
            <p className="product-price">$22.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-8.jpg" alt="Dark Chocolate Bar" className="product-img" />
            <figcaption className="product-name">Dark Chocolate Bar</figcaption>
            <p className="product-price">$26.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-9.jpg" alt="Hazelnut Chocolate" className="product-img" />
            <figcaption className="product-name">Hazelnut Chocolate</figcaption>
            <p className="product-price">$28.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-10.jpg" alt="Chocolate Fudge" className="product-img" />
            <figcaption className="product-name">Chocolate Fudge</figcaption>
            <p className="product-price">$19.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-11.jpg" alt="Chocolate Box" className="product-img" />
            <figcaption className="product-name">Chocolate Box</figcaption>
            <p className="product-price">$35.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-12.jpg" alt="Chocolate Bark" className="product-img" />
            <figcaption className="product-name">Chocolate Bark</figcaption>
            <p className="product-price">$24.99</p>
          </div>
          <div className="product-item">
            <img src="/chocolate-13.jpg" alt="Milk Chocolate with Almonds" className="product-img" />
            <figcaption className="product-name">Milk Chocolate with Almonds</figcaption>
            <p className="product-price">$27.99</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

