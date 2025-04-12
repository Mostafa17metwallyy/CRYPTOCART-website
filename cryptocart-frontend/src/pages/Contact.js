import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out with any questions or feedback.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h4>Our Office</h4>
        <p>CryptoCart HQ<br />123 Blockchain Blvd<br />Metaverse City, 0x0000</p>

        <h4>Email</h4>
        <p>support@cryptocart.io</p>
      </div>
    </div>
  );
};

export default Contact;
