

import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "../authFront/auth";
import { useAuth } from "../authFront/authContext"; //hook

const ProtectedRoute = () => {
  const [authStatus, setAuthStatus] = useState(null);
  const location = useLocation(); 
  
  
  const { updateToken, token } = useAuth(); 

  useEffect(() => {
    const checkAuth = async () => {
  
      const result = await isAuthenticated(updateToken); 
      
      setAuthStatus(result);
    };
    
    checkAuth();
  }, [location.pathname, token, updateToken]); // Зависимости обновлены

 
  if (authStatus === null) return <div>Loading...</div>;

  if (!authStatus) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;