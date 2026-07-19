import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProdDets from "./pages/ProdDets";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import PageLoader from "./components/PageLoad";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <PageLoader />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProdDets />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            theme="colored"
          />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
