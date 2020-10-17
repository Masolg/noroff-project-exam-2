import React, { useState } from 'react';
import '../../../style/homeAdmin.scss';
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';

import { useHistory } from 'react-router-dom';

function HomeAdmin() {  
    
    const rightPwd = "123456";
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState("");
    let history = useHistory();

    function handleUpdatePwd(e){
        console.log(e.target.value);
        setPwd(e.target.value);
    }

    function handleClick(e){
        console.log(e);
        if ( pwd === rightPwd ){
            history.push("/adminstart");
        }
        else{
            setError("Wrong password. Try again.");
        }
    }


    return (
        <>
            <div className="homeAdmin">
                <h2>Log In</h2>
                <div className="homeAdmin__login">
                    <label className="login__label">Username</label><br />
                    <input type="text" name="username" placeholder="Enter Username" id="username" />
                </div>
                <div className="homeAdmin__login">
                    <label className="login__label">Password</label><br />
                    <input type="password" 
                        name="password" 
                        placeholder="Enter Password" 
                        id="password" 
                        value={pwd}
                        onChange={handleUpdatePwd}/>
                    <span className="loginError">{error}</span>
                </div>

                <div className="homeAdmin__button">
                    <label className="login__label">&nbsp;</label>
                    <input type="button" value="Log In" id="loginButton" onClick={handleClick} />
                </div>   

            </div>
            <Illustration />     
            <Footer />     
        </>
    );
}

export default HomeAdmin;