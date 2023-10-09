import React from 'react';
import Button from 'react-bootstrap/Button';

function CustomButton({ onClick, label }) {
    return(
        <Button variant="primary" className="p-2 m-1" onClick={onClick}>
        {label}
        </Button> 
    );
}

export default CustomButton;