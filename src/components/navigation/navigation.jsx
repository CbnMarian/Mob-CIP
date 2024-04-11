import React, { useState, useContext } from "react";
import "./navigation.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
            <div className="navigation__logo">Your Logo</div>

            <div className="cart-menu">
              <div
                className={`navigation__links ${
                  isMobileMenuOpen ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <a href="#">Categories</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                </ul>
              </div>
              <div className={`cart ${cartOpen ? "open" : ""}`}>
                <ShoppingCartIcon />
              </div>
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
