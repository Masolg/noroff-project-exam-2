import React from 'react';
import '../../style/footer.scss';


import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__contactinfo">
                <h4>Contact Us:</h4>
                <p>
                    <a href="mailto:holidaze@gmail.com"> Send e-mail </a>

            </p>
                <p>
                    <a href="tel:90983405"> Phone: 909&nbsp;83&nbsp;405 </a>
            </p>
            </div>
            <div className="footer__social_media">
                <a href="#"><img src={facebook} alt="Facebook" /></a>
                <a href="#"><img src={twitter} alt="Twitter" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
            </div>
        </div>

    );
}

export default Footer;
