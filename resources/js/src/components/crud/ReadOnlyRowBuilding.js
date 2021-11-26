import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
     
      <td>{contact.buildingName}</td>
      <td>{contact.address}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.buildingName)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
