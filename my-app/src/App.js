import React, { Suspense, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebApp from './web-app.js'
import './App.css';
import Main from "./client/components/main/main";
import ContactUs from './client/components/contactUs/contactUs';
import OurServices from './client/components/services/ourServices/ourServices.js';
import OurPortfolio from './client/components/ourPortfolio/ourPortfolio.js';

function App() {
  return (

      <Router>
        <div className="App">
          <Routes>
                <Route path='/' element={<WebApp />}>
                    
                    {/* Default redirect: /h -> /home */}
                    <Route path="h" element={<Navigate to="/home" replace />} />
                    
                    {/* Child Route: /home renders inside the Outlet of WebApp */}
                    <Route path="home" element={<Main/>} />
                    
                    {/* Child Route: /ContactUs renders inside the Outlet of WebApp */}
                    <Route path="ContactUs" element={<ContactUs/>} />
                    
                    {/* Optional: Add an index route if you want localhost:3000/ to show Main */}
                    <Route index element={<Navigate to="/home" replace />} />

                    <Route path="ourServices" element={<OurServices/>} />

                    <Route path="/ourPortfolio" element={<OurPortfolio />} />

                </Route>
                
              
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
