import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table/Table";
import Parent from "./components/ProductInfo/Parent";

function App() {
  const [selectedUser, setSelectedUser] = useState("Lisa");

  const handleSelectUser = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="App">
      <select
        className="form-select"
        aria-label="User"
        value={selectedUser}
        onChange={handleSelectUser}
      >
        <option value="Lisa">
          Lisa
        </option>
        <option value="Alan">
          Alan
        </option>
      </select>
      <h1> Ministry of Government Applications </h1>
      <Parent user={selectedUser} />
      <Table user={selectedUser} />
    </div>
  );
}

export default App;
