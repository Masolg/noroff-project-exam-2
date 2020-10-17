import React from 'react';
import '../../style/header.scss';

import { Navbar, Nav } from 'react-bootstrap';

import logo from "../../assets/images/logo.png";

function Header() {
    return (

        <div className="navigation">
            <Navbar expand="md" className="nav" >
                <Navbar.Brand href="#home" className="nav__brand">
                    <h1>Holidaze</h1>
                    <img
                        src={logo} 
                        alt="Holidaze logo"
                        height="75"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                     <Nav> 
                        <Nav.Link href="#"><span className="navcol">Home</span></Nav.Link>
                        <Nav.Link href="#"><span className="navcol">Contact</span></Nav.Link>
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

       

        // <div className="header">
        //     <div className="header__logo">
        //      <img src={logo} alt="Holidaze logo"/>
        //     </div>

        //     <div className="header__navbar">
        //         <nav>
        //             <ul>
        //                 <li><a href="#">Home</a></li>
        //                 <li><a href="#">Contact Us</a></li>
        //             </ul>
        //         </nav>
        //     </div>
        // </div>

    );
}

export default Header;
