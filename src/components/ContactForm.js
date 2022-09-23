import React, { useState } from "react";
import Button from "@mui/material/Button"; // tambahkan ini untuk import butto

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({fnaddContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");


    const onChangeInput = (event, stateName) => {
        stateName(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newContact = {
            name : name,
            phone : phone,
            email : email,
            photo : photo,
        };
        fnaddContact(newContact)
        setName("")
        setPhone("")
        setEmail("")
        setPhoto("")
    }

   

    function generate_button(placehol, tipe, valueName, stateName) {
        return (
            <input
                placeholder={placehol}
                type={tipe}
                onChange={event => onChangeInput(event, stateName)}
                value={valueName}
                style={{ margin: "0.5em" }}
            />
        );
        // return <input placeholder={placehol} type={tipe} />
    }
    return (
        <div>
            <form style={{ margin: "0.5em 0em" }} onSubmit={onSubmitHandler}>
                {generate_button('Name', 'text', name, setName)}<br></br>
                {generate_button('Phone', 'number', phone, setPhone)}<br></br>
                {generate_button('Email', 'email', email, setEmail)}<br></br>
                {generate_button('Photo URL', 'text', photo, setPhoto)}<br></br>
                <Button color="success" type="submit" >Tambah To Do</Button>
                {/* <input type='text' id="name" name="name">Name</input>
            <input type='number' id="phone" name="phone">Phone</input>
            <input type='text' id="email" name="email">Email</input>
            <input type='text' id="photo" name="photo">Photo</input>
            <button type="submit">Add New</button> */}
            </form>
        </div>
    );
};

export default ContactForm;