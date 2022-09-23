
// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React, { useState } from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {

   
    // Contact berisi foto, nama, telepon, dan email
    return (
        <div>
            <div>
                <ul>
                    {data.map((value,key) => {
                        return (
                            <li key={key}>{value.name} {value.phone} {value.email} {value.photo}</li>
                        )

                    })}

                </ul>
            </div>
        </div>
    );
};

export default Contact;
