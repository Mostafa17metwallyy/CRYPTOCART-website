import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminOrders from './pages/AdminOrders'; // Admin route
import AdminContactMessages from './pages/AdminContactMessages';

// Styles
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/orders" element={<AdminOrders />} /> {/* Admin orders route */}
            <Route path="/admin/contactmessages" element={<AdminContactMessages />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast messages */}
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
