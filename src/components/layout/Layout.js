import React from 'react'

import '../../style/layout.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';

import logo from "../../assets/images/logo.png";
import Home from "../visitor/home/Home";
import Contact from "../visitor/contact/Contact";
import ContactSuccess from "../visitor/contact/ContactSuccess";
import Results from "../visitor/results/Results";
import Specific from '../visitor/specific/Specific';
import HomeAdmin from '../admin/home/HomeAdmin';
import Start from '../admin/start/Start';
import Create from '../admin/create/Create';
import Messages from '../admin/messages/Messages';
import Enquirys from '../admin/enquirys/Enquirys';


function Layout() {
    return (

        <div className="navigation">
            <Router>
                <Navbar expand="md" className="nav" >
                    <NavLink exact to="/" >
                        <Navbar.Brand href="#home" className="nav__brand">
                            <h1>Holidaze</h1>
                            <img
                                src={logo} 
                                alt="Holidaze logo"
                                height="75"
                                />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav> 
                            <NavLink exact to="/"><span className="navcol">Home</span></NavLink>
                            <NavLink to="/contact"><span className="navcol">Contact</span></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/contactsuccess" component={ContactSuccess} />
                    <Route path="/results/:searchText" component={Results} />
                    <Route path="/results" component={Results} />
                    <Route path="/specific/:id" component={Specific} />
                    <Route path="/admin" component={HomeAdmin} />
                    <Route path="/adminstart" component={Start} />
                    <Route path="/admincreate" component={Create} />
                    <Route path="/adminmessages" component={Messages} />
                    <Route path="/adminenquirys" component={Enquirys} />
                </Switch>
            </Router>
        </div>

    );
}

export default Layout;