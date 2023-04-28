import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  //   console.log(error, status);
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-5">
        <FaceFrownIcon className="w-25 mt-5" />
        <div className="text-center">
          <h2 className="font-bold fs-1">
            <span className="text-danger">Error</span>
            {status || 404}
          </h2>
          <p className="fs-5 font-semibold mb-4">{error?.message}</p>
          <Link to="/" className="btn btn-warning">
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
