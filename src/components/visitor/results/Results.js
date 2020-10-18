import React, { useEffect, useState } from 'react';
import '../../../style/results.scss';
import ResultsAcc from "./ResultsAcc";
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";


function Results() {

    const [ accommodations, setAccommodations ] = useState([]);
    
    let history = useHistory();
    let url = BASE_URL + "establishments";
    const options = { headers };

    let { searchText } = useParams();
    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                if (searchText === undefined){
                    setAccommodations(json);
                }else{

                    let tempArray = [];
                    for (var i=0; i < json.length; i++){
                        console.log(searchText);
                        console.log(json[i].name.indexOf("ss") !== -1)
                        if (json[i].name.indexOf(searchText) !== -1){
                            tempArray.push(json[i])
                        }
                    }
                    console.log(tempArray);
                    setAccommodations(tempArray);
                }
            })
            .catch(error => console.log(error))
    }, [url]);
    
    
    return (
        <div className="results">
            <h2>Accommodations</h2>

            <div className="results__result">
                {accommodations.map((accom) => 
                    <ResultsAcc key={accom.id} accom={accom} />
                    )}
            </div>

            <Illustration />
            <Footer />
        </div>

    );
}

export default Results;
