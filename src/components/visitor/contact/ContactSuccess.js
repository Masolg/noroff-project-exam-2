import React from 'react';
import '../../../style/contactSuccess.scss';
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';
import check from "../../../assets/images/check.png";


function ContactSuccess() {
    return (
        <>
        <div className="success">
            <div className="success__text">
                <h2>Thank you for contacting us!</h2>
                <h3>We will give you an answer as fast as we can.</h3>
                <p>
                    Your reference number is 4582.<br />
                    Please use this if contacting us about the same case.
                 </p>
            </div> 
            <div className="success__image">
                <img src={check} alt="Check"/>
            </div>
            
        </div>
        <Illustration />
        <Footer />
        </>
    );
}

export default ContactSuccess;