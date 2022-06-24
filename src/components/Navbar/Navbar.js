import React from "react";
import "../../Styles/Navbar.css";
import Women from "../../images/beauty.png"
import Cart from "../common/Cart/Cart";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logoContainer">
        {" "}
        <a href="/card">
          <img
            className="logo"
            src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
            alt=""
          />
          <p>Happay</p>
        </a>
      </div>
      <div className="CartContainer">
        <a href="/cage">
          <Cart cardCount={22}/>
        </a>
        <a href="/home">
          <div className="circle">
            <img src={Women} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
