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

  const [productName, setProductName] = useState("");
  const [productOwnerName, setProductOwnerName] = useState("");
  const [developers, setDevelopersList] = useState("");
  const [scrumMasterName, setScrumMasterName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [methodology, setMethodlogy] = useState("");
  const [location, setLocation] = useState("");

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
              rows="5"
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
          <DatePicker
            selected={formData["startDate"]}
            onChange={(date) => setFormData((prevFormData) => ({
                  ...prevFormData,
                  startDate:date,
                }))}
            dateFormat="yyyy/MM/dd"
            className="form-control" 
          />
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
