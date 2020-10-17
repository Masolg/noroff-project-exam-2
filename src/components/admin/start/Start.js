import React from 'react';
import '../../../style/start.scss';
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';


import { NavLink } from 'react-router-dom';


function Start() {
    return (
        <>
            <div className="start">
                <h2>What do you want to do?</h2>
                <div className="start__choice">
                    <NavLink to="/admincreate">
                        <button>Create New<br />Establishment</button>
                    </NavLink>
                </div>
                <div className="start__choice">
                    <NavLink to="/adminmessages">
                        <button>Read<br />Messages</button>
                    </NavLink>
                </div>

                <div className="start__choice">
                    <NavLink to="/adminenquirys">
                        <button>Read<br />Enquiries</button>
                    </NavLink>
                </div>

            </div>
            <Illustration />
            <Footer />
        </>
    );
}

export default Start;