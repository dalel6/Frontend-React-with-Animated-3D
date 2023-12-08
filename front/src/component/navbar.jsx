// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex items-center h-24">
        
        <nav className="navbar">
            
          <ul>
          <a href="" className="logo">
          <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt="" />
          <span className="ml-4 uppercase font-black">clara<br/>thella</span>
        </a>
       
            <li className="active">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Blog</span>
              </a>
            </li>
            <button className="button">Contact me</button>
          </ul>
        
        </nav>
       
      </div>
    </header>
  );
};

export default Navbar;
