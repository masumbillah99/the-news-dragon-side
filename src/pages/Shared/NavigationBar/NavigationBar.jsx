import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar expand="lg" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              <Link
                className="text-decoration-none text-secondary"
                to="/category/0"
              >
                Home
              </Link>
              <Link
                className="text-decoration-none text-secondary mx-3"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-decoration-none text-secondary"
                to="/career"
              >
                Career
              </Link>
            </Nav>
            <Nav className="ms-auto">
              {user && (
                <UserCircleIcon style={{ width: "2rem", marginRight: "7px" }} />
              )}
              {user ? (
                <Link
                  className="btn btn-secondary px-4 text-white text-decoration-none"
                  to="/login"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  className="btn btn-success px-4 text-white text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
