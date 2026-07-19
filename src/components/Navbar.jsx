import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TechVerse</Link>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" onClick={closeMenu}>
            Cart
          </NavLink>
        </li>

        <li>
          <NavLink to="/wishlist" onClick={closeMenu}>
            Wishlist
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>

      <div className="icons">
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;