import React, { useState } from "react";
import "./navigation.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__content">
          <div className="navigation__logo">Your Logo</div>
          <div
            className={`navigation__links ${isMobileMenuOpen ? "open" : ""}`}
          >
            <ul>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">
                  <AddShoppingCartIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="navigation__mobile-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
