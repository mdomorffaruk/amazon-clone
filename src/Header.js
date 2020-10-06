import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://img.favpng.com/9/22/14/logo-amazon-com-transparency-vector-graphics-image-png-favpng-VhvZeHiLBUkXF2Z914ZbBFMuQ.jpg"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/**logo */}
      </div>
      <div className="header_nav">
        <div className="header__option">
          <span className="header__optionLineOne">Helow Guys</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Helow Guys</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Helow Guys</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
