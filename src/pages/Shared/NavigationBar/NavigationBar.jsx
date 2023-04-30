import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavigationBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  // handle sign out user
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar expand="lg" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <Nav className="ms-lg-auto fs-5 my-3 my-lg-0">
              <Link
                className="text-decoration-none text-secondary"
                to="/category/0"
              >
                Home
              </Link>
              <Link
                className="text-decoration-none text-secondary my-3 my-lg-0 mx-lg-3"
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
            <Nav className="ms-lg-auto">
              {user && (
                <span className="mx-auto pt-2 mb-3 mb-lg-0">
                  <UserCircleIcon
                    style={{ width: "2rem", marginRight: "7px" }}
                  />
                </span>
              )}
              {user ? (
                <Button
                  onClick={handleLogOut}
                  className="px-4"
                  variant="secondary"
                >
                  Logout
                </Button>
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
