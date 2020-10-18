import React from 'react';
import '../../../style/contact.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';
import { useHistory } from 'react-router-dom'; 
import { BASE_URL, headers } from "../../../constants/api";


const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
        .string()
        .email("Pleases enter a valid email address")
        .required("Email address is required"),
    message: yup.string().required("This field can not be blank")
}); 


function Contact() {

    let history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleContact(data){
        console.log("data", data);

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        const url = BASE_URL + "contacts";
        
        
        options.method = "POST";
        options.body = JSON.stringify(data);
        
        await fetch(url, options)
            .then((response) => response.json())
            .then((j) => {
                console.log(j);
                history.push("/contactsuccess")
            })
            .catch((error) => console.error(error));
    }


    return (
        <>
            <div className="contact">
                <h2 className="contact__heading">Contact Us</h2>

                <Form onSubmit={handleSubmit(handleContact)}>
                    <Form.Group>
                        <Form.Label className="contact__label">Name</Form.Label>
                        <Form.Control className="contact__write" name="name" placeholder="Enter Name" ref={register} />
                        <span className="error">{errors.name && <p>{errors.name.message}</p>}</span>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="contact__label">E-mail</Form.Label>
                        <Form.Control className="contact__write" name="email" placeholder="Enter E-mail" ref={register} />
                        <span className="error">{errors.email && <p>{errors.email.message}</p>}</span>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="contact__label">Message</Form.Label>
                        <Form.Control className="contact__write" as="textarea" name="message" placeholder="Enter Your Message" ref={register} />
                        <span className="error">{errors.message && <p>{errors.message.message}</p>}</span>
                    </Form.Group>

                    <Button className="contact__submit" type="submit">Send</Button>
                </Form>

            
            </div>
            <Illustration />
            <Footer />
        </>

    );
}

export default Contact;