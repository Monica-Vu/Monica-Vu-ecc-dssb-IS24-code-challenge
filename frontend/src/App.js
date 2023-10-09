import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import Parent from "./components/ProductInfo/Parent";
import ProductContext from "./components/ProductContext/ProductContext";
import UserContext from "./components/UserContext/UserContext"

function App() {
  const [selectedUser, setSelectedUser] = useState("Lisa");
  const [data, setData] = useState(null);

  const handleSelectUser = (e) => {
    setSelectedUser(e.target.value);
  };

  const fetchData = () => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  useEffect(() => { fetchData() }, []);

  return (
    <UserContext.Provider value={{selectedUser}}>
    <ProductContext.Provider value={{ data, fetchData }}>
      <div className="App">
        <select
          className="form-select"
          aria-label="User"
          value={selectedUser}
          onChange={handleSelectUser}
        >
          <option value="Lisa">Lisa</option>
          <option value="Alan">Alan</option>
        </select>
        <h1> Ministry of Government Applications </h1>
        <Parent />
        <Table />
      </div>
    </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
