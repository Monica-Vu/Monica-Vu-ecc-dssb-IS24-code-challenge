import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProductModal({
  show,
  handleClose,
  handleSubmit,
  formData,
  setFormData,
}) {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              value={formData["productName"]}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  productName: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-owner-name" className="form-label">
              Product Owner Name
            </label>
            <input
              type="text"
              className="form-control"
              id="product-owner-name"
              value={formData["productOwnerName"]}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  productOwnerName: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="developers" className="form-label">
              Developer(s)
            </label>
            <textarea
              className="form-control"
              id="developers"
              value={formData["developers"]}
              onChange={(e) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  developers: e.target.value,
                }));
              }}
              rows="2"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="scrum-master-name" className="form-label">
              Scrum Master Name
            </label>
            <input
              type="text"
              className="form-control"
              id="scrum-master-name"
              value={formData["scrumMaseterName"]}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  scrumMasterName: e.target.value,
                }))
              }
              required
            />
          </div>
          <label htmlFor="startdate" className="form-label pl-2">
            Select Start Date
          </label>
          <DatePicker
            selected={formData["startDate"]}
            onChange={(date) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                startDate: date,
              }))
            }
            dateFormat="yyyy/MM/dd"
            className="form-control"
          />
          <br />
          <label htmlFor="methodology" className="form-label pr-2">
            Select Agile Methodology
          </label>
          <select
            className="form-select"
            aria-label="Select Methodology"
            value={formData["methodology"]}
            onChange={(e) =>
            {
              setFormData((prevFormData) => ({
                ...prevFormData,
                methodology: e.target.value,
              }))
            }}
          >
           <option selected>Please select a methodology</option>
            <option value="Agile">Agile</option>
            <option value="Waterfall">Waterfall</option>
          </select>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={formData["location"]}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  location: e.target.value,
                }))
              }
              required
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
