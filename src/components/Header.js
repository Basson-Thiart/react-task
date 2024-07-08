import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Header component displays a navigation bar with links and user information.
const Header = ({ username }) => {
  return (
    <Navbar bg="light" expand="lg">
      {/* Brand/logo link to the home page */}
      <Navbar.Brand as={Link} to="/">
        My Store
      </Navbar.Brand>
      {/* Toggle button for mobile navigation */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Collapsible navigation links */}
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Left-aligned navigation links */}
        <Nav className="me-auto">
          {/* Link to the home page */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {/* Link to the store page */}
          <Nav.Link as={Link} to="/store">
            Store
          </Nav.Link>
          {/* Link to the cart page */}
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
        {/* Right-aligned navigation links */}
        <Nav>
          {/* Conditional rendering based on the 'username' prop */}
          {username ? (
            // Displayed when user is logged in
            <Navbar.Text>
              Signed in as: <a href="#login">{username}</a>
            </Navbar.Text>
          ) : (
            // Displayed when user is not logged in
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
