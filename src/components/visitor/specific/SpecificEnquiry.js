import React, { useEffect, useState } from 'react';
import '../../../style/specificEnquiry.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL, headers } from "../../../constants/api";


const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
        .string()
        .email("Pleases enter a valid e-mail address")
        .required("E-mail address is required"),
    checkIn: yup.string().required("Check-In can not be blank"),
    checkOut: yup.string().required("Check-Out can not be blank")
}); 

function SpecificEnquiry({ accommodation, show, setShow }) {

    const [ sentEnquiry, setSentEnquiry ] = useState(false);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const url = BASE_URL + "establishments";
    const options = { headers };

    async function handleEnquiry(data) {
        console.log("data", data);
        data.establishmentId = accommodation.id;
        console.log("data", data);

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        const url = BASE_URL + "enquiries";

        await fetch(url, options)
            .then((response) => response.json())
            .then((j) => {
                console.log(j);
                setSentEnquiry(true);
            })
            .catch((error) => console.error(error));
    }

    function handleClose(){
        setShow("none");
    }

    return (
        <>
            <div className="enquiry" style={{display: show}}>
                <div className="enquiry__box">
                    <input type="button" value="Close" onClick={handleClose} />
                    <h2>Send enquiry for {accommodation.name}</h2>
                    <div className="sentSuccess">{sentEnquiry ? "Thank you! We will respond as soon as possible." : ""}</div>
                    <form onSubmit={handleSubmit(handleEnquiry)}>
                        <input type="text" name="name" placeholder="Name"  ref={register} />
                        <span className="error">{errors.name && <p>{errors.name.message}</p>}</span>
                        <input type="text" name="email" placeholder="E-mail" ref={register} />
                        <span className="error">{errors.email && <p>{errors.email.message}</p>}</span>
                        <input type="date" name="checkIn" placeholder="Check-In" ref={register} />
                        <input type="date" name="checkOut" placeholder="Check-Out" ref={register} />
                        <span className="error">{errors.checkOut && <p>{errors.checkOut.message}</p>}</span>
                        <span className="error">{errors.checkIn && <p>{errors.checkIn.message}</p>}</span>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default SpecificEnquiry;