import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import "../Styles/Header.css"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {

  // Close the mobile slide-out menu (CSS checkbox hack) when a link is chosen.
  function closeMenu() {
    const toggle = document.getElementById("menu-toggle");
    if (toggle) toggle.checked = false;
  }

  return (
    <>
    <div className="header"> 

    <Link to='/' className="navbar-logo" >
      <img className='icon' src="/Logos/EMD logo.svg" alt='Eclectic Mélange Designs logo'/>
      </Link>

      <div className='menu-container' > 
        <input type='checkbox' id='menu-toggle' />
        <label htmlFor='menu-toggle' className='menu-icon'>
          <span className='open-icon'> <MenuOpenIcon sx={{fontSize: 40}}/></span>
          <span className='close-icon'> <CloseIcon sx={{fontSize: 35}}/></span>
     </label>
     <div className='backdrop-blur' id='backdrop-blur'> </div>
     
        <div  className='hiddenLinks' id='hiddenLinks' role='navigation'>  
          <ul >
           <Link to='/' onClick={closeMenu}>HOME </Link>
            <Link to='/about' onClick={closeMenu}>ABOUT </Link>
            <Link to='/designs' onClick={closeMenu}>DESIGNS</Link>
            <Link to='/contact' onClick={closeMenu}>CONTACT</Link>
            </ul>
            </div>

          <Navbar className='mainLinks' id='mainLinks' role='navigation' expand='md'> 
            <Container> 

              <Navbar.Brand > <Link to='/' className="navbar-brand" >
                <img src="/Logos/EMD logo.svg" alt='Eclectic Mélange Designs logo'  />
                </Link> 
                </Navbar.Brand>

              <Navbar.Collapse id='basic-navbar-nav' className='basic-nav-container'>  
            <Nav  className="ms-auto text-warning nav-container "  > 
           <NavLink to='/' className='nav-link custom-nav-link'>home </NavLink>
           <NavLink  to='/about' className='nav-link custom-nav-link'>about </NavLink>
           <NavLink  to='/designs' className='nav-link custom-nav-link'>designs </NavLink>
           <NavLink  to='/contact' className='nav-link custom-nav-link'>contact </NavLink>
            
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
      </div>
        </div>
    
    </>
   
  );
}

export default Header