import React, { useState } from "react";
import "./navigation.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <nav className="navigation">
        <div className="container">
          <div className="navigation__content">
            <Link to="/" className="navigation__logo">
              Your Logo
            </Link>

            <div className="cart-menu">
              <div
                className={`navigation__links ${
                  isMobileMenuOpen ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/Categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="/Product">Product</Link>
                  </li>
                </ul>
              </div>
              <Link to="/cart" className={`cart ${cartOpen ? "open" : ""}`}>
                <ShoppingCartIcon />
              </Link>
            </div>
            <div
              className="navigation__mobile-toggle"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
