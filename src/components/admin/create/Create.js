import React from 'react';
import '../../../style/create.scss';
import Illustration from '../../../components/Illustration';
import Footer from '../../../components/visitor/Footer';


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL, headers } from "../../../constants/api";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    image: yup.string().required("This field can not be blank"),
    price: yup.number()
        .positive("Number must be positive")
        .min(1, "Minimum price is 1 USD"),
    maxGuests: yup.number()
        .positive("Number must be positive")
        .min(1, "Minimum 1 guest required"),
    description: yup.string().required("This field can not be blank")
}); 



function Create() {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleAddAccommodation(data) {
        console.log("data", data);

        const options = { headers, method: "POST", body: JSON.stringify(data) };
        
        const url = BASE_URL + "establishments";

        await fetch(url, options)
            .then((response) => response.json())
            .then((j) => {
                console.log(j);
                // Here I need to add success stuff
            })
            .catch((error) => console.error(error));

    }

    return (
        <div className="create">
            <h2>Create New Establishment</h2>
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


            <Illustration />
            <Footer />
        </div>
    );
}

export default Create;