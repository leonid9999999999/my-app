
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useRef } from 'react';
import React from "react";

const withRouter = (WrappedComponent) => {
  return function WithRouter(props) {
    const ref = useRef()
    const location = useLocation();
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} location={location} />;
  };
};

export default withRouter;
