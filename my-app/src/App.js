import React, { Suspense, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebApp from './web-app.js'
import './App.css';
import Header from './client/components/header/Header';
import Main from "./client/components/main/main";
import ContactUs from './client/components/contactUs/contactUs';
import OurServices from './client/components/services/ourServices/ourServices.js';
import OurPortfolio from './client/components/ourPortfolio/ourPortfolio.js';
import PortfolioExample from './client/components/portfolioExamplePage/portfolioExample.js';
import PrivacyPolicy from './client/components/PrivacyPolicy/PrivacyPolicy.js';
import AboutUs from './client/components/About/AboutUs.js';
import ScrollToTop from "./client/components/utils/ScrollToTop";
import TermsOfService from "./client/components/Terms/TermsOfService";

function App() {
  return (
  <Router>
  <div className="App">
  <Routes>


    <Route path="/" element={<WebApp />}>
      <Route index element={<Navigate to="home" replace />} />

      <Route path="home" element={<Main />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="/ourservices/:id" element={<OurServices/>} />
      <Route path="/portfolio/:id" element={<PortfolioExample />} />

      <Route path="ourPortfolio" element={<OurPortfolio />} />
      <Route path="privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
    </Route>
  </Routes>
</div>
</Router>
                    
    
  );
}

export default App;
