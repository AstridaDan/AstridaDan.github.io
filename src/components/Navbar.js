import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
//MAKING - CLICK
    const [click, setClick] = useState(false);
//MENU BAR BUTTON
    const [button, setButton] = useState(true);
//CHANGE AFTER CLICK
    const handleClick = () => setClick(!click);
//MENU CLOSES ON NEW TAB
    const closeMobileMenu = () => setClick(false);
//SHOW ICON ON SMALLER SCREEN
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
//BUTTON FIX AFTER PAGE REFRESHING
    useEffect (() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
           <nav className='navbar'>
               <div className='navbar-container'>
                {/*LOGO*/}
                   {/*CLOSE MENU WHEN YOU CLICK ON LOGO*/}
                   <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                       <i class='fab fa-napster'></i>dan_gloria_ 
                   </Link>
                {/*MENU ICON*/}
                   <div className='menu-icon' onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                {/* LET MENU DISSAPEAR ON NEW PAGE */}
                {/* MENU CONTENT */}
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                               About
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                               Gallery
                           </Link>
                       </li>
                   </ul>
                   {/*SPECIAL STYLE FOR BUTTON*/}  
                   {button && <Button buttonStyle='btn--outline' buttonSize='btn--large'>Gallery</Button>}
               </div>
           </nav>
        </>
    );
}

export default Navbar;
