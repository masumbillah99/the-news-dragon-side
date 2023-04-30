import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center my-5">
        Loading...
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

/** 
 * -------------------
 *  STEPS STEPS STEPS
 * -------------------
    1. check user is logged in or not
    2. if user is logged in, then allow them to visit the route
    3. else redirect the user to the login page.
    4. set up the private router
    5. handle loading
*/
