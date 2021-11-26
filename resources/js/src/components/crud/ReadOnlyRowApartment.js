import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr> 
      <td>{contact.apartmentNumber}</td>
      <td>{contact.buildingNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.apartmentNumber)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
