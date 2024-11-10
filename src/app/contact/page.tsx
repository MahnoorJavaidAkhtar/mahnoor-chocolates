import Navbar from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="contact">
        <section className="contact-section">
          <div className="contact-content">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              Feel free to reach out for any inquiries or custom orders!
            </p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

