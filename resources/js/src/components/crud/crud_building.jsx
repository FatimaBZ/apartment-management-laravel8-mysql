
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowBuilding";
import EditableRow from "./EditableRowBuilding";
import axios from "axios";

const data = [
  {
    "id": "",
    "buildingName": "",
    "address": "",
  },

]


export default function CrudBuilding() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    buildingName: "",
    address: ""
    
  });

  const [editFormData, setEditFormData] = useState({
    buildingName: "",
    address: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      buildingName: addFormData.buildingName,
      address: addFormData.address,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
 axios.post('http://localhost:8888/reactProject/addBuilding.php',newContact)
.then(res=> console.log(res.data))
.catch(error => {
  alert("Data could not be inserted. Try again")
  console.log(error.response)
     });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      buildingName: editFormData.buildingName,
      address: editFormData.address
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    axios.post('http://localhost:8888/reactProject/editBuilding.php',editedContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be updated Try again")
     console.log(error.response)
        });
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      buildingName: contact.buildingName,
      address: contact.address
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (buildingName) => {
    let data = {buildingName:buildingName}
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.buildingName === buildingName);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    axios.post('http://localhost:8888/reactProject/deleteBuilding.php',data)
    .then(res=> console.log(res.data))
    .catch(error => {
      alert("Data could not be deleted. Try again")
      console.log(error.response)
         });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit} className="crud">
        <table>
          <thead>
            <tr>
              <th>Building Name</th>
              <th>Building Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Building</h2>
      <form onSubmit={handleAddFormSubmit} className="crud">
        <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter building name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter building address"
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
