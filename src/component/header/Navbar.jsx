/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ isHamburgerOpen }) {
  return (
    <nav
      id="nav-menu"
      className={`${!isHamburgerOpen && 'hidden'} absolute py-3 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
    >
      <div className="block lg:flex">
        <NavLink
          to="/"
          className="nav-link"
          activeclassname="nav-link active"
          title="Tombol menu beranda"
          aria-label="Tombol menu beranda"
        >
          Beranda
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;