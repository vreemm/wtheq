
import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../images/logowtheq.png';
import '../App.css';



const Sidebar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);
  
    useEffect(() => {
      setActivePage(location.pathname);
    }, [location]);
  

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
   <main className={show ? "space-toggle" : null }>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
         <i className="fa-solid fa-bars"></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : ""}`}>
        <nav className="nav">
            <div>
             <div className="nav-logo">
                 <img src={logo} alt="logo" />
                 <h2 className="nav-logo-name">WTHEQ</h2>
              </div>

              <div className="nav-list">
                 <Link to="/HomePage" className={`nav-link ${activePage === "/HomePage" ? "active" : ""}`}>
                    <i className="fas fa-home-alt nav-logo-icon"></i>
                    <span className="nav-link-name">Home Page</span>
                  </Link>
                 
                <Link to="/Profile" className={`nav-link ${activePage === "/Profile" ? "active" : ""}`}>
                    <i className="fa-regular fa-user nav-logo-icon"></i>
                    <span className="nav-link-name">Profile</span>
                 </Link>

                 <Link to="/Community" className={`nav-link ${activePage === "/Community" ? "active" : ""}`}>
                    <i className="fa-solid fa-users-line nav-logo-icon"></i>
                    <span className="nav-link-name">Community</span>
                 </Link>

                 <Link to="/Performance" className={`nav-link ${activePage === "/Performance" ? "active" : ""}`}>
                    <i className="fa-solid fa-chart-line nav-logo-icon"></i>
                    <span className="nav-link-name">Performance</span>
                 </Link>

                </div>
            </div>

            <Link to="/logout" className={`nav-link ${activePage === "/logout" ? "active" : ""}`}>
                    <i className="fas fa-sign-out nav-logo-icon"></i>
                    <span className="nav-link-name">Logout</span>
            </Link>
        </nav>
      </aside>
     

    </main> 
  );
  
};

export default Sidebar;