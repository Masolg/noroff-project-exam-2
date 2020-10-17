import React, { useEffect, useState } from 'react';
import '../../../style/specific.scss';

import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';
import SpecificEnquiry from '../../../components/visitor/specific/SpecificEnquiry';
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";

function Specific() {

    const [ accommodation, setAccommodations ] = useState({});
    const [ error, setError ] = useState("");
    const [ showEnquiry, setShowEnquiry ] = useState("none");

    let { id } = useParams();
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                if ( json.error ){
                    setAccommodations({});
                    setError(json.message);
                } else {
                    setAccommodations(json);
                }
            })
            .catch(error => console.log(error))
    }, [url]);

    function handleClick(){
        setShowEnquiry("block");

    }   

    return (
        <>
            <div className="specific">
                <h2>{accommodation.name}</h2>
                <div className="specific__info">
                    <div className="specific__image">
                        <img src={accommodation.image} alt=""/>
                    </div> 
                    <div className="specific__text">
                        <div className="specific__description">
                            {accommodation.description}
                        </div>
                        <div className="specific__price">
                            {accommodation.price} USD
                        </div>
                        <div className="specific__maxGuests">
                            Max Guests: {accommodation.maxGuests}
                        </div>
                        <div className="specific__address">
                            {accommodation.address}
                        </div>
                    </div>
                </div>
                <div className="specific__button">
                    <button onClick={handleClick}>Send Enquiry</button>
                </div>
            </div>
            <SpecificEnquiry accommodation={accommodation} show={showEnquiry} setShow={setShowEnquiry}/>
            <Illustration />
            <Footer />
        </>
    );
}

export default Specific;