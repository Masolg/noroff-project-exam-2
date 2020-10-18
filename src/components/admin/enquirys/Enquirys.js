import React, { useState, useEffect } from 'react';
import '../../../style/enquirys.scss';
import Illustration from '../../../components/Illustration';
import { BASE_URL, headers } from "../../../constants/api";
import Footer from '../../../components/visitor/Footer';
import Enquiry from './Enquiry';
import { NavLink } from 'react-router-dom';


function Enquirys() {

    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState("");
    const url = BASE_URL + "enquiries";
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setEnquiries([]);
                    setError(json.message);
                } else {
                    setEnquiries(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
        <div className="enquirys">
            <NavLink to="/adminstart">
                <input type="button" value="Back" />
            </NavLink>
            <h2>Enquiries</h2>
            {enquiries.map((enquiry, id) =>
                <Enquiry key={id} enquiry={enquiry} />
            )}

        </div>
        <Illustration />
        <Footer />
        </>
    );
}

export default Enquirys;