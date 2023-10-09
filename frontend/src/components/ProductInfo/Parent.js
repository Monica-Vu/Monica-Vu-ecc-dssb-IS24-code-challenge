import React, { useState } from "react";
import ProductModal from "./Modal";
import CustomButton from "../Button";
import ProductContext from "../ProductContext/ProductContext";
import Table from "../Table/Table";

function Parent({ user }) {
  const intialProductState = {
    productName: "",
    productOwnerName: "",
    developers: "",
    scrumMasterName: "",
    startDate: "",
    methodology: "Agile",
    location: "",
  };

  const { fetchData } = React.useContext(ProductContext);

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(intialProductState);
  const [mode, setMode] = useState("edit");
  

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

        if (key === "startDate" && formData[key] instanceof Date) {
          debugger;
          console.log(`date => `, formData[key]);
          formData[key] = formData[key]
            .toISOString()
            .split("T")[0]
            .replaceAll("-", "/");
        }

        formDataObject[key] = formData[key];
      }

      console.log("formDataObject =>", JSON.stringify(formDataObject));

      if (mode === "edit") {
        fetch(`http://localhost:3000/api/products/${formData["productId"]}`, {
          method: "PUT",
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
            fetchData();
          });
      } else {
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
            fetchData();
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <CustomButton onClick={() => { 
        setFormData(intialProductState);
        setMode("Add"); 
        handleShow();
      }} label={"Add"} />
      <ProductModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        mode={mode}
      />
      <Table
        handleShow={handleShow}
        setMode={setMode}
        setFormData={setFormData}
      />
    </div>
  );
}

export default Parent;
