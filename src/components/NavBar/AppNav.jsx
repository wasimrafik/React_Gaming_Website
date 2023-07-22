import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import NavImg1 from "../../assets/logo.png"
import './AppNav.css'

function AppNav() {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown = window.scrollY > 0;
      setNavbarBg(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar expand="lg" className={navbarBg ? "bg-blue fixed-top" : "bg-transparent"}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={NavImg1} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav-link">
                Our Shop
              </NavLink>
              <NavLink to="/product" className="nav-link">
                Product Details
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
              <NavLink>
                <Button variant="danger" className="rounded-pill p-2 px-4 nav-btn">
                  Sign in
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppNav;
