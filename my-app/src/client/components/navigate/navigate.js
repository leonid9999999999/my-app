
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const withRouter = (WrappedComponent) => {
  return function WithRouter(props) {
    const location = useLocation();
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} location={location} />;
  };
};

export default withRouter;
