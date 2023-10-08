import React from 'react';
import Button from 'react-bootstrap/Button';

function AddButton({ handleShow }) {
    return(
        <Button variant="primary" className="p-2 m-1" onClick={handleShow}>
        Add
        </Button> 
    );
}

export default AddButton;