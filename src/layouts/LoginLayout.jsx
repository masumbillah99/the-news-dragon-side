import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const LoginLayout = () => {
  return (
    <div className="bg-secondary bg-opacity-10 py-5 min-vh-100">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
