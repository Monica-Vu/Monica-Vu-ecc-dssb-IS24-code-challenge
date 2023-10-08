import React, { useState } from 'react';
import ProductModal from "./Modal";
import AddButton from "./Button";

function Parent() {
    const intialProductState = {
        productName: "",
        productOwnerName: "",
        developers: "",
        scrumMasterName: "",
        startDate: "",
        methodology: "",
        location: ""
    }

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState(intialProductState)

    const handleClose = () => { 
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        try {
            const formDataObject = new FormData(); 
            for (const key in formData) {
                if (key === 'developers') {
                    console.log('developers =>', formData.developers);
                    formData[key] = formData[key].split(',');
                    console.log("new data =>",formData[key] )
                }

                formDataObject.append(key, formData[key]);
            }

            fetch('http://localhost:3000/api/products', {
                method: 'POST',
                body: formDataObject,
              })
              .then((response) => response.json())
              .then((data) => {
                console.log('Server response: ', data)
                handleClose();
                setFormData(intialProductState)
              })

        } catch (error) {
            console.error('Error:', error)
        }
    }

    return(
        <div> 
        <AddButton handleShow={handleShow} />
        <ProductModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} setFormData={setFormData} formData={formData}/>
        </div>
    );
}

export default Parent;