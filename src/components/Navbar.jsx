import React from 'react';
import { NavLink } from 'react-router-dom';

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px',
});

export default function Navbar(props) {
  let textMode = 'dark';
  if (props.mode === 'dark') textMode = 'light';

  return (
    <>
      <nav
        className={`navbar navbar-${props.mode} bg-${props.mode} rounded-2 mb-3`}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex align-items-center">
              <NavLink className="navbar-brand me-5" to="/">
                {props.title}
              </NavLink>
              <NavLink to="/" style={navLinkStyles} className="me-3">
                Home
              </NavLink>
              <NavLink to="/About" style={navLinkStyles} className="me-3">
                About
              </NavLink>
            </div>
            <div
              className={`form-check form-switch text-${textMode} h-auto`}
              style={{ minHeight: '10px', padding: '8px 0 0 0' }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="change_mode"
              />
              <label className="form-check-label" htmlFor="change_mode">
                Change Mode
              </label>
            </div>
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div> */}
        </div>
      </nav>
    </>
  );
}
