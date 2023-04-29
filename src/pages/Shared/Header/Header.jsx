import React from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

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
    </Container>
  );
};

export default Header;
