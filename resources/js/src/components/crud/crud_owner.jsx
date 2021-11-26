
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowOwner";
import EditableRow from "./EditableRowOwner";
import axios from "axios";
const data = [
  {
    "id": 1,
    "apartmentNumber": "01",
    "firstName": "Jenny",
    "lastName": "Chan",
    "ownerId": "02",
  },
  
 
]


export default function CrudOwner() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    apartmentNumber: "",
    firstName: "",
    lastName: "",
    ownerId: "",
  });

  const [editFormData, setEditFormData] = useState({
    apartmentNumber: "",
    firstName: "",
    lastName: "",
    ownerId: "",
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
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      ownerId: addFormData.ownerId,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
 axios.post('http://localhost:8888/reactProject/addOwner.php',newContact)
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
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      ownerId: editFormData.ownerId,
  
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.post('http://localhost:8888/reactProject/editOwner.php',editedContact)
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
      firstName: contact.firstName,
      lastName: contact.lastname,
      ownerId: contact.ownerId
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
 axios.post('http://localhost:8888/reactProject/deleteOwner.php',data)
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
              {/* <th>First Name</th>
              <th>Last Name</th> */}
              <th>Owner Id</th>
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

      <h2>Assign an apartment to its owner  </h2>
      <form onSubmit={handleAddFormSubmit}>
       <input
          type="text"
          name="apartmentNumber"
          required="required"
          placeholder="Enter apartment#"
          onChange={handleAddFormChange}
        />
        {/* <input
          type="text"
          name="firstName"
          required=""
          placeholder="Enter first name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="lastName"
          required=""
          placeholder="Enter last name"
          onChange={handleAddFormChange}
        /> */}
        <input
          type="text"
          name="ownerId"
          required="required"
          placeholder="Enter owner id"
          onChange={handleAddFormChange}
        />
        <button type="submit" >Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/crud_apartment">Register an apartment</a><br/>
       
        </>
        
      }

      </div>
    </div>
  );
};
