import React from "react";

const Navbar = () => {
  return (
    <main>
      <div className="navbar">
        <div className="logo">
          <img src="./Assets/Wrky.ai Logo.svg" alt=""></img>
        </div>
        <div className="center-nav">
          <ul>
            <li>Blogs</li> 
            <li>Resources</li><img className="dropdown" src="./Assets/Dropdown.svg" alt="" srcSet="" />
            <li>Products</li><img className="dropdown"  src="./Assets/Dropdown.svg" alt="" srcSet="" />
          </ul>
        </div>
        <div className="button-nav">
          <button id="login">Login</button>
          <button id="signup">Signup</button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
