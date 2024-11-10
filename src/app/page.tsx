import Navbar from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Welcome to MJ Chocolate</h2>
            <p className="hero-subtitle">Discover premium handcrafted chocolates.</p>
            <a href="#products" className="buy-now-button">
              Buy Now
            </a>
          </div>
        </section>
        <section className="featured-products">
          <h3 className="featured-products-title">Featured Products</h3>
          <div className="product-list">
            <figure className="product-item">
              <img src="/chocolate-1.jpg" alt="Delicious chocolate" className="product-img" />
              <figcaption className="product-name">Classic Dark Chocolate</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-2.jpg" alt="Handcrafted chocolate" className="product-img" />
              <figcaption className="product-name">Handcrafted Milk Chocolate</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-3.jpg" alt="Exquisite chocolate box" className="product-img" />
              <figcaption className="product-name">Exquisite Chocolate Box</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-4.jpg" alt="Assorted chocolate" className="product-img" />
              <figcaption className="product-name">Assorted Chocolates</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-13.jpg" alt="Milk Chocolate with Almonds" className="product-img" />
              <figcaption className="product-name">Milk Chocolate with Almonds</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-12.jpg" alt="Chocolate Bark" className="product-img" />
              <figcaption className="product-name">Chocolate Bark</figcaption>
            </figure>
          </div>
        </section>
        {/* New Section for Chocolate Box for Special Events */}
        <section className="chocolate-box-events">
          <h3 className="chocolate-box-title">Chocolate Boxes for Special Events</h3>
          <div className="product-list">
            <figure className="product-item">
              <img src="/chocolate-box-1.jpg" alt="Special Event Chocolate Box" className="product-img" />
              <figcaption className="product-name">Elegant Event Chocolate Box</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-box-2.jpg" alt="Luxury Event Chocolate Box" className="product-img" />
              <figcaption className="product-name">Luxury Event Chocolate Box</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-box-3.jpg" alt="Celebration Chocolate Box" className="product-img" />
              <figcaption className="product-name">Celebration Chocolate Box</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-13.jpg" alt="Milk Chocolate with Almonds" className="product-img" />
              <figcaption className="product-name">Milk Chocolate with Almonds</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-12.jpg" alt="Chocolate Bark" className="product-img" />
              <figcaption className="product-name">Chocolate Bark</figcaption>
            </figure>
            <figure className="product-item">
              <img src="/chocolate-11.jpg" alt="Chocolate Bark" className="product-img" />
              <figcaption className="product-name">Chocolate Bark</figcaption>
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}




