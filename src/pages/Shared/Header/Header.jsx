import React from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar } from "react-bootstrap";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="website logo" className=" w-75" />
        <p className="text-secondary mt-2">
          <small>Journalism Without Fear or Favour</small> <br />
          <small className="fw-bold">
            {moment().format("dddd, MMMM D, YYYY")}
          </small>
        </p>
      </div>
      <div className="d-flex bg-secondary bg-opacity-10 p-2 rounded my-4">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100} pauseOnHover={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi
          exercitationem maxime hic eum provident!
        </Marquee>
      </div>
      <Navbar expand="lg" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              <Link className="text-decoration-none text-secondary" to="/">
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
              <Nav.Link href="#profile">
                <UserCircleIcon className="user-icon" />
              </Nav.Link>
              <Nav.Link href="#login">
                <Button className="px-4" variant="secondary">
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
