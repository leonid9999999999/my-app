import { Outlet } from 'react-router-dom';
import Header from '../src/client/components/header/Header.js';
import Footer from "../src/client/components/Footer/Footer.js";


function WebApp() {
 
    return (
      <div>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    );
  
}

export default WebApp
