import React, { useState } from 'react';
import '../../../style/enquiry.scss';


function Enquiry({ enquiry }) {

    const [ showAll, setShowAll ] = useState(false);

    function handleClick(){
        setShowAll(!showAll);
    }

    return (
        <div className="enquirybox">
            <div className="enquirybox__preview" onClick={handleClick}>
                FROM: {enquiry.name}
            </div>
            <div className="enquirybox__all" style={{ display: showAll ? "block" : "none" }}>
                <h4>{enquiry.establishmentId}</h4>
                <h4>E-Mail: {enquiry.email}</h4>
                <h4>Check-In: {enquiry.checkIn}</h4>
                <h4>Check-Out: {enquiry.checkOut}</h4>
            </div>

        </div>
    );
}

export default Enquiry;