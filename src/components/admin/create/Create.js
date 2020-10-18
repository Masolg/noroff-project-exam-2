import React, { useState } from 'react';
import '../../../style/create.scss';
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL, headers } from "../../../constants/api";
import { NavLink} from 'react-router-dom';


const schema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    image: yup.string().required("This field can not be blank"),
    price: yup.number()
        .typeError("Please enter a price")
        .min(1, "Minimum price is 1 USD"),
    maxGuests: yup.number()
        .typeError("Please enter maximum number of guests")
        .min(1, "Minimum 1 guest required"),
    description: yup.string().required("This field can not be blank")
}); 



function Create() {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [ createSuccess, setCreateSuccess ] = useState(false);


    async function handleAddAccommodation(data) {
        console.log("data", data);

        const options = { headers, method: "POST", body: JSON.stringify(data) };
        
        const url = BASE_URL + "establishments";

        await fetch(url, options)
            .then((response) => response.json())
            .then((j) => {
                console.log(j);
                setCreateSuccess(true);
            })
            .catch((error) => console.error(error));

    }

    return (
        <>
            <div className="create">
                <NavLink to="/adminstart">
                    <input type="button" value="Back"  />
                </NavLink>
                <h2>Create New Establishment</h2>
                <div className="createSuccess">{createSuccess ? "The establishment has been created" : ""}</div>
                <form onSubmit={handleSubmit(handleAddAccommodation)}>
                    <div className="create__input">
                        <label className="create__label">Name</label><br />
                        <input type="text" name="name" id="name" ref={register} />
                        <span className="error">{errors.name && <p>{errors.name.message}</p>}</span>
                    </div>
                    <div className="create__input">
                        <label className="create__label">Image</label><br />
                        <input type="url" name="image" id="image" ref={register} />
                        <span className="error">{errors.image && <p>{errors.image.message}</p>}</span>
                    </div>
                    <div className="create__input">
                        <label className="create__label">Price</label><br />
                        <input type="number" name="price" id="price" ref={register} />
                        <span className="error">{errors.price && <p>{errors.price.message}</p>}</span>
                    </div>
                    <div className="create__input">
                        <label className="create__label">Max Guests</label><br />
                        <input type="number" name="maxGuests" id="guests" ref={register} />
                        <span className="error">{errors.maxGuests && <p>{errors.maxGuests.message}</p>}</span>
                    </div>
                    <div className="create__input">
                        <label className="create__label">Description</label><br />
                        <input type="text" name="description" id="description" ref={register} />
                        <span className="error">{errors.description && <p>{errors.description.message}</p>}</span>
                    </div>

                    <div className="create__button">
                        <input type="submit" value="Create" id="createButton" />
                    </div>
                </form>
            </div>
            <Illustration />
            <Footer />
        </>
    );
}

export default Create;