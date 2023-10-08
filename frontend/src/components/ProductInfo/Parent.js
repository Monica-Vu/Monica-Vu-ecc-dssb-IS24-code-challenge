import React, { useState } from "react";
import ProductModal from "./Modal";
import AddButton from "./Button";

function Parent() {
  const intialProductState = {
    productName: "",
    productOwnerName: "",
    developers: "",
    scrumMasterName: "",
    startDate: new Date(),
    methodology: "",
    location: "",
  };

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(intialProductState);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    try {
      const formDataObject = {};
      for (const key in formData) {
        if (key === "developers") {
          formData[key] = formData[key].split(",");
        }

        if (key === "startDate") {
            formData[key] = formData[key].toISOString().split('T')[0].replaceAll("-", "/");
        }
        
        formDataObject[key] = formData[key];
      }

      console.log("formDataObject =>", JSON.stringify(formDataObject))

      fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server response: ", data);
          handleClose();
          setFormData(intialProductState);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <AddButton handleShow={handleShow} />
      <ProductModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  );
}

export default Parent;
