import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from "../UserContext/UserContext";
import { Controller } from "react-hook-form";

function ProductModal({
  show,
  handleClose,
  sendData,
  formData,
  setFormData,
  mode,
  errorMessage,
  register,
  control,
  handleSubmit,
  errors,
}) {
  const { selectedUser } = React.useContext(UserContext);

  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(sendData)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode === "edit" ? "Update" : "Add"} Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage.length > 0 && (
            <Alert variant="danger">
              {errorMessage.map((message) => {
                return <p>{message}</p>;
              })}
            </Alert>
          )}
          <div className="mb-3">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              className="form-control"
              {...register("productName", { required: true })}
            />
            {errors.productName && <span>Product name is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="product-owner-name" className="form-label">
              Product Owner Name
            </label>
            <input
              className="form-control"
              {...register("productOwnerName", { required: true })}
            />
            {errors.productOwnerName && (
              <span>Product owner name is required</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="developers" className="form-label">
              Developer(s)
            </label>
            <br />
            <small id="developersHelp" className="form-text text-muted">
              {" "}
              Please seperate each developer name by comma. Make sure to not
              have a comma at the end or there will be an error.{" "}
            </small>
            <textarea
              className="form-control"
              {...register("developers", { required: true })}
              rows="2"
            ></textarea>
            {errors.developers && <span>Developers field is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="scrum-master-name" className="form-label">
              Scrum Master Name
            </label>
            <input
              className="form-control"
              {...register("scrumMasterName", { required: true })}
            />
            {errors.scrumMasterName && (
              <span>Scrum master name is required</span>
            )}
          </div>
          {selectedUser === "Lisa" && (
            <div className="datePicker">
              <label htmlFor="startdate" className="form-label me-2">
                Select Start Date
              </label>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              {errors.startDate && (
                <span>
                  <br /> Please select a start date
                </span>
              )}
              <br />
            </div>
          )}
          <label htmlFor="methodology" className="form-label pr-2">
            Select Methodology
          </label>
          <select
            className="form-select"
            aria-label="Select Methodology"
            {...register("methodology", { required: true })}
          >
            <option value="Agile">Agile</option>
            <option value="Waterfall">Waterfall</option>
          </select>
          {selectedUser === "Alan" && (
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                className="form-control"
                {...register("location", { required: true })}
              />
              {errors.location && <span>Location is required</span>}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {mode === "edit" ? "Save" : "Submit"}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ProductModal;
