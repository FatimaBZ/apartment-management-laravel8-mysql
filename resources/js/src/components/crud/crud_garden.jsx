
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
const data = [
  {
    "id": "",
    "gardenName": "",
    "buildingNumber": ""
  },
 
]


export default function CrudGarden() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    gardenName: "",
    buildingNumber: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    gardenName: "",
    buildingNumber: "",
   
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
      gardenName: addFormData.gardenName,
      buildingNumber: addFormData.buildingNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://localhost:8888/reactProject/addGarden.php',newContact)
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
      gardenName: editFormData.gardenName,
      buildingNumber: editFormData.buildingNumber,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.post('http://localhost:8888/reactProject/editGarden.php',editedContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be updated. Try again")
     console.log(error.response)
        });
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      gardenName: contact.gardenName,
      buildingNumber: contact.buildingNumber,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (gardenName) => {
    let data = {
      gardenName:gardenName
    }
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.gardenName === gardenName);

    newContacts.splice(index, 1);

   setContacts(newContacts);
    console.log(gardenName)
    axios.post('http://localhost:8888/reactProject/deleteGarden.php',data)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be deleted. Try again")
     console.log(error.response)
        });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Garden Name</th>
              <th>Building Number</th>
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

      <h2>Add a Garden</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="gardenName"
          required="required"
          placeholder="Enter garden name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="buildingNumber"
          required="required"
          placeholder="Enter building#"
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/manager_plant">Manage Plants</a><br/>
        <a href="/manager_pool">Manage Pool</a><br/>
        {/* <a href="/manager_incident">Manage Incident</a> */}
        </>
        
      }

      </div>
    </div>
  );
};
