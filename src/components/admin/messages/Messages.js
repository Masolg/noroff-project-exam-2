import React, { useState, useEffect } from 'react';
import '../../../style/messages.scss';
import Illustration from '../../../components/Illustration';
import { BASE_URL, headers } from "../../../constants/api";
import Footer from '../../../components/visitor/Footer';
import Message from './Message';
import { NavLink} from 'react-router-dom';


function Messages() {

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");
    const url = BASE_URL + "contacts";
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setMessages([]);
                    setError(json.message);
                } else {
                    setMessages(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
        <div className="messages">
            <NavLink to="/adminstart">
                <input type="button" value="Back" />
            </NavLink>
            <h2>Messages</h2>
            {messages.map((message, id) => 
                <Message key={id} message={message} />
            )}
            

        </div>
            <Illustration />
            <Footer />
        </>
    );
}

export default Messages;