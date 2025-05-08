import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert("❌ Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" rows="5" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {sent && <p className="success-msg">✅ Message sent!</p>}
    </div>
  );
};

export default Contact;
