import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ProductModal from "./Modal";
import CustomButton from "../Button";
import ProductContext from "../ProductContext/ProductContext";
import Table from "../Table/Table";

const HOST = "http://localhost:3000";

function Parent() {
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
  const [mode, setMode] = useState("edit");
  const [errorMessage, setErrorMessage] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setErrorMessage("");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const sendData = (data) => {
    try {
      const formDataObject = {};
      for (const key in data) {
        if (key === "developers") {
          if (data[key].length > 0) {
            formDataObject[key] = data[key].split(",");
          } else {
            formDataObject[key] = [];
          }
        } else if (key === "startDate" && data[key] instanceof Date) {
          formDataObject[key] = data[key]
            .toISOString()
            .split("T")[0]
            .replaceAll("-", "/");
        } else {
          formDataObject[key] = data[key];
        }
      }

      if (mode === "edit") {
        fetch(`${HOST}/api/products/${data["productId"]}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.Errors) {
            setErrorMessage(data.Errors);
          } else {
            handleClose();
            setErrorMessage("");
            fetchData();
          }
          });
      } else {
        fetch(`${HOST}/api/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.Errors) {
              setErrorMessage(data.Errors);
            } else {
              handleClose();
              setErrorMessage("");
              fetchData();
            }
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <CustomButton
        onClick={() => {
          setMode("Add");
          handleShow();
          reset(intialProductState);
        }}
        label={"Add"}
      />
      <ProductModal
        show={show}
        handleClose={handleClose}
        sendData={sendData}
        mode={mode}
        errorMessage={errorMessage}
        register={register}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      <Table
        handleShow={handleShow}
        setMode={setMode}
        reset={reset}
      />
    </div>
  );
}

export default Parent;
