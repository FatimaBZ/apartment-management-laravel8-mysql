
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowPool";
import EditableRow from "./EditableRowPool";
const data = [
  {
    "id": 1,
    "poolName": "Jenny Chan",
    "buildingName": "3 waterfoot road",
    
  },
  {
    "id": 2,
    "poolName": "Jessica warren",
    "buildingName": "4 tall town",
    
  },
  {
    "id": 3,
    "poolName": "Tony Frank",
    "buildingName": "11 lesly road",
    
  },
  {
    "id": 4,
    "poolName": "Jeremy Clark",
    "buildingName": "333 miltown manor",
    
  },
  {
    "id": 5,
    "poolName": "Raymond Edwards",
    "buildingName": "99 blue acres",
    
  }
]


export default function CrudPool() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    poolName: "",
    buildingName: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    poolName: "",
    buildingName: "",
    
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
      poolName: addFormData.poolName,
      buildingName: addFormData.buildingName,
     
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      poolName: editFormData.poolName,
      buildingName: editFormData.buildingName,
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      poolName: contact.poolName,
      buildingName: contact.buildingName,
      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>buildingName</th>
              
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

      <h2>Add a Pool</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="poolName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter building..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
      <div>
      <a href="/manager_plant">Manage Plants</a><br/>
        {/* <a href="/manager_incident">Manage Incident</a><br/> */}
        <a href="/manager_garden">Manage Garden</a>
      </div>
    </div>
  );
};