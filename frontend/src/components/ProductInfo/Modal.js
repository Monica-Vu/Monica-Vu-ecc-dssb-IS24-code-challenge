import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from "../UserContext/UserContext"
import { useForm, Controller } from "react-hook-form"

function ProductModal({
  show,
  handleClose,
  // handleSubmit,
  formData,
  setFormData,
  mode,
  errorMessage,
}) {
  const {
    register,
    control, 
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { selectedUser } = React.useContext(UserContext);

  const onSubmit = (data) => console.log(data)
  
  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>

      <Modal.Header closeButton>
        <Modal.Title>{mode === 'edit' ? 'Update': 'Add'} Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {errorMessage.length > 0 && 
            <Alert variant="danger">
              {errorMessage.map((message) => { return <p>{message}</p>})}
            </Alert>
          }
           <div className="mb-3">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              // type="text"
              className="form-control"
              // id="product-name"
              {...register("productName", { required: true })}
              // value={formData["productName"]}
              // onChange={(e) =>
              //   setFormData((prevFormData) => ({
              //     ...prevFormData,
              //     productName: e.target.value,
              //   }))
              // }
              // required
            />
             {errors.productName && <span>Product name is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="product-owner-name" className="form-label">
              Product Owner Name
            </label>
            <input
              // type="text"
              className="form-control"
              // id="product-owner-name"
              {...register("productOwnerName", { required: true })}
              // value={formData["productOwnerName"]}
              // onChange={(e) =>
              //   setFormData((prevFormData) => ({
              //     ...prevFormData,
              //     productOwnerName: e.target.value,
              //   }))
              // }
              // required
            />
             {errors.productOwnerName && <span>Product owner name is required</span>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="developers" className="form-label">
              Developer(s)
            </label>
            <br /> 
            <small id ="developersHelp" className="form-text text-muted"> Please seperate each developer name by comma. Make sure to not have a comma at the end or there will be an error. </small>
            <textarea
              className="form-control"
              // id="developers"
              {...register("developers", { required: true })}
              // value={formData["developers"]}
              // onChange={(e) => {
              //   setFormData((prevFormData) => ({
              //     ...prevFormData,
              //     developers: e.target.value,
              //   }));
              // }}
              rows="2"
            ></textarea>
             {errors.developers && <span>Developers field is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="scrum-master-name" className="form-label">
              Scrum Master Name
            </label>
            <input
              // type="text"
              className="form-control"
              {...register("scrumMasterName", { required: true })}
              // id="scrum-master-name"
              // value={formData["scrumMasterName"]}
              // onChange={(e) =>
              //   setFormData((prevFormData) => ({
              //     ...prevFormData,
              //     scrumMasterName: e.target.value,
              //   }))
              // }
              // required
            />
             {errors.scrumMasterName && <span>Scrum master name is required</span>}
          </div> 
          {selectedUser === "Lisa" && (
            <div className="datePicker">
              <label htmlFor="startdate" className="form-label me-2">
                Select Start Date
              </label>
              <Controller
                control={control}
                name='startDate'
                rules={{ required: true }}
                render={({field}) => (
                  <DatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                 
                // selected={formData["startDate"]}
                // onChange={(date) =>
                //   setFormData((prevFormData) => ({
                //     ...prevFormData,
                //     startDate: date,
                //   }))
                // }
                // dateFormat="yyyy/MM/dd"
                // className="form-control"
              />)}/> 
              {errors.startDate && <span><br /> Please select a start date</span>}
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
            // value={formData["methodology"]}
            // onChange={(e) => {
            //   setFormData((prevFormData) => ({
            //     ...prevFormData,
            //     methodology: e.target.value,
            //   }));
            // }}
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
                // type="text"
                className="form-control"
                {...register("location", { required: true })}
                // id="location"
                // value={formData["location"]}
                // onChange={(e) =>
                //   setFormData((prevFormData) => ({
                //     ...prevFormData,
                //     location: e.target.value,
                //   }))
                // }
                // required
              />
               {errors.location && <span>Location is required</span>}
            </div>
          )} 
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" type="submit" {onClick={handleSubmit}}> */}
        <Button variant="primary" type="submit">
          {mode === 'edit'? 'Save' : 'Submit'}
        </Button>
      </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ProductModal;
