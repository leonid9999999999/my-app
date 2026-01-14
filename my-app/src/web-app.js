import { Outlet } from 'react-router-dom';
import Header from '../src/client/components/header/Header.js';

function WebApp() {
 
    return (
      <div>
        <Header />
        <Outlet/>
      </div>
    );
  
}

export default WebApp
