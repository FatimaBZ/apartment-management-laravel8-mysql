
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowPlant";
import EditableRow from "./EditableRowPlant";
import axios from "axios";
const data = [
  {
    "id": "",
    "plantName": "",
    //"buildingName": "3 waterfoot road",
    "gardenNumber": "",
    
  }
]


export default function CrudPlant() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    plantName: "",
    gardenNumber: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    plantName: "",
    //buildingName: "",
    gardenNumber: "",
    
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
      plantName: addFormData.plantName,
      //buildingName: addFormData.buildingName,
      gardenNumber: addFormData.gardenNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://localhost:8888/reactProject/addPlant.php',newContact)
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
      plantName: editFormData.plantName,
      //buildingName: editFormData.buildingName,
      gardenNumber: editFormData.gardenNumber,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.post('http://localhost:8888/reactProject/editPlant.php',editedContact)
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
      plantName: contact.plantName,
     // buildingName: contact.buildingName,
      gardenNumber: contact.gardenNumber,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (plantName) => {
    let data = {
      plantName:plantName
    }
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.plantName === plantName);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(plantName)
    axios.post('http://localhost:8888/reactProject/deletePlant.php',data)
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
              <th>Plant Name</th>
              <th>Garden Number</th>
              
              {/* <th>Building Name</th> */}
              
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

      <h2>Add a Plant</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="plantName"
          required="required"
          placeholder="Enter a plant..."
          onChange={handleAddFormChange}
        />
        {/* <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter an building name..."
          onChange={handleAddFormChange}
        /> */}
        <input
          type="text"
          name="gardenNumber"
          required="required"
          placeholder="Enter a Garden number..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
      <div>
      {/* <a href="/manager_incident">Manage Incident</a><br/> */}
        <a href="/manager_pool">Manage Pool</a><br/>
        <a href="/manager_garden">Manage Garden</a>
      </div>
    </div>
  );
};
