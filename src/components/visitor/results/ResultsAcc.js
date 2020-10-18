import React from 'react';
import '../../../style/resultsAcc.scss';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';


function ResultsAcc({accom}) {

    function handleClick(){

    }

    return (
        <div className='resultsAcc'>
            <div className='resultsAcc__image'>
                <img src={accom.image} alt=''/>
            </div>
            <div className='resultsAcc__text'>
                <h3>{accom.name}</h3>
                <div className='resultsAcc__info'>
                    <div>Price: {accom.price} USD</div>        
                    <div>Maximum guests: {accom.maxGuests}</div>        
                </div>
                <div className='resultsAcc__button'>
                    <NavLink to={"/specific/" + accom.id}>
                        <Button 
                            className='resultsAcc__submit' 
                            type='submit'
                            onClick={handleClick}
                            >
                                Choose
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>

    );
}

export default ResultsAcc;