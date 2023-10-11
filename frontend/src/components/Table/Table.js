import React, { useRef, useState, useEffect } from "react";
import ProductContext from "../ProductContext/ProductContext";
import UserContext from "../UserContext/UserContext";
import Button from "react-bootstrap/esm/Button";
import CustomButton from "../Button";

const Table = ({ handleShow, setMode, reset }) => {
  const { data } = React.useContext(ProductContext);
  const { selectedUser } = React.useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(data || []);

  useEffect(() => {
    setDisplayedProducts(data || []);
    setSearchTerm("")
  }, [data])

  useEffect(() => {
    setSearchTerm("")
    setDisplayedProducts(data || []);
  }, [selectedUser])


  const filterForLisa = () => {
    return data.filter(
      (product) =>
        product.scrumMasterName.toLowerCase() === searchTerm.toLowerCase()
    );
  };

  const filterForAlan = () => {
    return data.filter((product) =>
      product.developers.find((dev) => dev.toLowerCase() === searchTerm.toLowerCase())
    );
  };

  const onSearchClick = () => {
    if (selectedUser === "Lisa") {
      setDisplayedProducts(filterForLisa());
    } else {
      setDisplayedProducts(filterForAlan());
    }
  };

  return (
    <div>
      <div className="row no-gutters">
        <div class="col-6">
          <input
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                onSearchClick()
              }
            }}
          />
        </div>
        <div class="col-sm-auto">
          <Button variant="primary" onClick={onSearchClick}>
            Search
          </Button>
        </div>
      </div>
      {data ? (
        <div>
          <p>
            <b> Number of Products: </b> {displayedProducts.length}
          </p>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th> Product Id </th>
                <th> Product Name </th>
                <th> Product Owner </th>
                <th> Developers </th>
                <th> Scrum Master </th>
                <th> Start Date </th>
                <th> Methodology </th>
                <th> Location </th>
                {selectedUser === "Alan" && <th> Edit </th>}
              </tr>
            </thead>
            <tbody>
              {displayedProducts.map((item) => (
                <tr key={item.productId}>
                  <td>{item.productId}</td>
                  <td>{item.productName}</td>
                  <td>{item.productOwnerName}</td>
                  <td>{item.developers.join(", ")}</td>
                  <td>{item.scrumMasterName}</td>
                  <td>{item.startDate}</td>
                  <td>{item.methodology}</td>
                  <td>{item.location}</td>
                  {selectedUser === "Alan" && (
                    <td>
                      <CustomButton
                        label={"Edit"}
                        onClick={() => {
                          reset({
                            ...item,
                            developers: item.developers.join(","),
                            startDate: item.startDate
                              ? new Date(item.startDate)
                              : "",
                          });
                          setMode("edit");
                          handleShow();
                        }}
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p> No Data To Display </p>
      )}
    </div>
  );
};

export default Table;
