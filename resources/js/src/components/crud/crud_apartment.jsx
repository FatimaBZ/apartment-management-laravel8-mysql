
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowApartment";
import EditableRow from "./EditableRowApartment";
import axios from "axios";
const data = [
  {
    "apartmentNumber": "",
    "buildingNumber": "",
  },
  
 
]


export default function CrudApartment() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    apartmentNumber: "",
    buildingNumber:"",
  });

  const [editFormData, setEditFormData] = useState({
    apartmentNumber: "",
    buildingNumber:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    console.log(event);

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log("New form data  ",newFormData);
    
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
    console.log("New Form Data ",newFormData)
  
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      apartmentNumber: addFormData.apartmentNumber,
      buildingNumber: addFormData.buildingNumber,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
 axios.post('http://localhost:8888/reactProject/addApartment.php',newContact)
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
      apartmentNumber: editFormData.apartmentNumber,
      buildingNumber: editFormData.buildingNumber,
  
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.post('http://localhost:8888/reactProject/editApartment.php',editedContact)
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
      
      apartmentNumber: contact.apartmentNumber,
      buildingNumber: contact.buildingNumber,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (apartmentNumber) => {
     let data = {apartmentNumber:apartmentNumber}
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.apartmentNumber === apartmentNumber);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(apartmentNumber)
 axios.post('http://localhost:8888/reactProject/deleteApartment.php',data)
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
              
              <th>Apartment Number</th>
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

      <h2>Add Apartment </h2>
      <form onSubmit={handleAddFormSubmit}>
       <input
          type="number"
          name="apartmentNumber"
          required="required"
          placeholder="Enter apartment#"
          onChange={handleAddFormChange}
        />
        
        <input
          type="number"
          name="buildingNumber"
          required="required"
          placeholder="Enter building #"
          onChange={handleAddFormChange}
        />
        <button type="submit" >Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/admin_owner_crud">Assign an apartment to an Owner</a><br/>
       
        </>
        
      }

      </div>
    </div>
  );
};
