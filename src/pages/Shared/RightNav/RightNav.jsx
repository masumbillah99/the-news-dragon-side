import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./RightNav.css";
import bg from "../../../assets/bg.png";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <>
      <div>
        <h3 className="mb-3">Login with</h3>
        <Button className="mb-sm-0 mb-lg-2" variant="outline-primary">
          <FaGoogle className="me-2" />
          Login with Google
        </Button>
        <Button variant="outline-secondary" className="ms-2 ms-lg-0">
          <FaGithub className="me-2" />
          Login with Github
        </Button>
      </div>
      <div className="my-5">
        <h4 className="mb-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="fw-semibold pointer">
            <span className="bg-secondary bg-opacity-10 rounded-circle px-2 py-1 me-2">
              <FaFacebookF />
            </span>
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="fw-semibold pointer">
            <span className="bg-secondary bg-opacity-10 rounded-circle ps-2 py-1 me-2">
              <FaTwitter className="me-2" />
            </span>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="fw-semibold pointer">
            <span className="bg-secondary bg-opacity-10 rounded-circle ps-2 py-1 me-2">
              <FaYoutube className="me-2" />
            </span>
            Youtube
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="learn-part text-center mt-5 p-5 text-white">
        <h2 className="my-4">Create an Amazing Newspaper</h2>
        <p className="my-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button className="px-4 py-2 fw-bold" variant="danger">
          Learn More
        </Button>
      </div>
    </>
  );
};

export default RightNav;
