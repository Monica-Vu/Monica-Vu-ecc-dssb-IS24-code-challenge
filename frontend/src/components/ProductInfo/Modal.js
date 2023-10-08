import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

function ProductModal({ show, handleClose, handleSubmit, formData, setFormData }) {
  const [productName, setProductName] = useState('')
  const [productOwnerName, setProductOwnerName] = useState('')
  const [developers, setDevelopersList] = useState('')
  const [scrumMasterName, setScrumMasterName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [methodology, setMethodlogy] = useState('')
  const [location, setLocation] = useState('')

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <div className="mb-3"> 
        <label htmlFor="product-name" className="form-label"> 
        Product
        </label>
        <input 
          type="text"
          className="form-control"
          id="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
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
          value={productOwnerName}
          onChange={(e) =>             setFormData((prevFormData) => ({
              ...prevFormData,
              developers: e.target.value
            }))}
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
            // setDevelopersList(e.target.value);
            setFormData((prevFormData) => ({
              ...prevFormData,
              developers: e.target.value
            }))
          }}
          rows="5">

          </textarea>
        </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}> Close </Button>
      <Button variant="primary" onClick={handleSubmit}> Submit </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;