import Navbar from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about">
        <section className="about-section">
          <div className="about-content">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              At MJ Chocolate, we believe that chocolate is more than just a treat—it is an experience. 
              Our handcrafted chocolates are made with the finest ingredients, blending rich flavors and 
              delicate textures to create a truly indulgent experience. From classic dark chocolate bars to 
              luxurious truffles and beautifully curated chocolate boxes for special occasions, each creation 
              is designed to satisfy your sweet cravings and bring joy to every bite. We are passionate about 
              crafting chocolates that not only taste amazing but also evoke a sense of warmth and happiness. 
              Whether you are gifting a loved one or treating yourself, MJ Chocolate offers a taste of luxury 
              that melts in your mouth and lingers in your heart. Welcome to a world where chocolate is art— 
              where every piece tells a story of craftsmanship, quality, and love.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

