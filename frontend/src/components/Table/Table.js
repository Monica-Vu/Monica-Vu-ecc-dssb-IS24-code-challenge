import React, { useRef, useState, useEffect } from "react";

import ProductContext from "../ProductContext/ProductContext";
import UserContext from "../UserContext/UserContext";
import CustomButton from "../Button";

const Table = ({ handleShow, setMode, reset }) => {
  // const [data, setData] = useState(null);
  const { data } = React.useContext(ProductContext);
  const { selectedUser } = React.useContext(UserContext);
  const [productCount, setProductCount] = useState(0);

  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;

    if (table) {
      const numProducts = table.querySelectorAll("tr");
      setProductCount(numProducts.length - 1);
    }
  });

  return (
    <div>
      {data ? (
        <div>
          <p>
            <b> Number of Products: </b> {productCount}
          </p>
          <table ref={tableRef} className="table table-bordered table-striped">
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
              {data.map((item) => (
                <tr key={item.productId}>
                  <td>{item.productId}</td>
                  <td>{item.productName}</td>
                  <td>{item.productOwnerName}</td>
                  <td>{item.developers.join(", ")}</td>
                  <td>{item.scrumMasterName}</td>
                  <td>{item.startDate}</td>
                  <td>{item.methodology}</td>
                  <td>{item.location}</td>
                  {selectedUser === "Alan" && <td>
                    <CustomButton
                    label={"Edit"}
                    onClick={() => {
                      console.log("clicked!")
                      reset({
                        ...item,
                        developers: item.developers.join(","),
                        startDate: item.startDate ? new Date(item.startDate) : '',
                      })
                      setMode("edit");
                      handleShow();
                      }
                      }
                    />
                  </td>}
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
