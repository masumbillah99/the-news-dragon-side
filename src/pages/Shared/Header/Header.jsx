import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="text-center mt-4">
        <img src={logo} alt="website logo" />
        <p className="text-secondary mt-2">
          <small>Journalism Without Fear or Favour</small> <br />
          <small className="fw-bold">{moment().format("dddd, MMMM D, YYYY")}</small>
        </p>
      </div>
    </div>
  );
};

export default Header;
