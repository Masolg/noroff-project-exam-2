import React, { useState } from 'react';
import '../../../style/message.scss';

function Message({ message }) {

    const [ showAll, setShowAll ] = useState(false);

    function handleClick(){
        setShowAll(!showAll);
    }

    return (
        <div className="message">
            <div className="message__preview" onClick={handleClick}>
                FROM: {message.name}
            </div>
            <div className="message__all" style={{ display: showAll ? "block" : "none"}}>
                <h4>{message.message}</h4>
                <h4>E-Mail: {message.email}</h4>
                <h4>Created at: {message.createdAt}</h4>
            </div>

        </div>
    );
}

export default Message;