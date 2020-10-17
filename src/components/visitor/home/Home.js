import React, { useEffect, useState } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from "react-bootstrap-typeahead";

import { useHistory } from "react-router-dom";

import '../../../style/home.scss';
import { BASE_URL, headers } from "../../../constants/api";
import Footer from '../../../components/visitor/Footer';



function Home() {
    
    const [ accommodations, setAccommodations ] = useState([]);
    const [ selection, setSelection ] = useState([]);
    const [ error, setError ] = useState("");
    const [ searchInput, setSearchInput ] = useState("");

    let history = useHistory();

    const url = BASE_URL + "establishments";
    const options = { headers };

    function handleSearch(){

        if (selection.length === 0){
            console.log("No suggestion chosen");
            if ( searchInput === "" ){
                console.log("No input");
                history.push("/results")
                
            } else{
                console.log("Input found")
                history.push("/results/" + searchInput);
            }
        } else{
            console.log("Suggestion chosen");
            history.push("/specific/" + selection[0].id);
        }
    }

    function handleInputChange(e){
        setSearchInput(e);
    }

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setAccommodations([]);
                    setError(json.message);
                } else {
                    setAccommodations(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
    }, [selection]);

    return (
        <>
        <div className="home">
            <h2>
                Want to experience amazing nature?<br />
                Then Bergen is just the place to visit!
            </h2>
            <div className="searcharea">

                <div className="searcharea__section">
                    <label className="searcharea__label">Accommodation</label>
                    <br />
                    <Typeahead
                        className="searchAccommodation"
                        id="accommodation"
                        labelKey="name"
                        placeholder="Write here..."
                        onChange={setSelection}
                        selected={selection}
                        onInputChange={handleInputChange}
                        options={accommodations}
                    />
                </div>
                <div className="searcharea__section">
                    <div className="split">
                        <label className="searcharea__label">Check-In</label>
                        <br />
                        <input type="date" name="check-in" placeholder="Check-in" id="check-in"/>
                    </div>
                    <div className="split">
                        <label className="searcharea__label">Check-Out</label>
                        <br />
                        <input type="date" name="check-out" placeholder="Check-out" id="check-out"/>
                    </div>
                </div>
                <div className="searcharea__section">
                    <div className="split">
                        <label className="searcharea__label">Rooms</label>
                        <br />
                        <input type="number" min="1" max="100" name="roomNumber" placeholder="1" id="roomNumber"/>
                    </div>
                    <div className="split">
                        <label className="searcharea__label">Guests</label>
                        <br />
                        <input type="number" min="1" max="100" name="roomGuests" placeholder="2" id="roomGuests"/>
                    </div>
                </div>

                <div className="searcharea__button">
                    <label className="searcharea__label">&nbsp;</label>
                    <br />
                    <input type="button" onClick={handleSearch} value="Search" id="searchButton"/>

                </div>


            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;