import React, { Suspense, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.css';
import Main from "./client/components/main/main";
import ContactUs from './client/components/contactUs/contactUs';

function App() {
  return (

      <Router>
        <div className="App">
          <Routes>
              
                <Route
                      
                    path="/"
                    element={<Navigate to="/home" />}
                />
                <Route
                    path="/home"
                    element={<Main/>}
                />
                <Route
                    path="/ContactUs"
                    element={<ContactUs/>}
                />
              
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
