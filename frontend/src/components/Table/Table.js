import React, { useState, useEffect } from "react";

const Table = ({ data }) => {
  return (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
