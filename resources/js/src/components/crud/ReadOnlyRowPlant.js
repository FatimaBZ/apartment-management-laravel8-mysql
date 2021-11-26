import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.plantName}</td>
      {/* <td>{contact.buildingName}</td> */}
      <td>{contact.gardenNumber}</td>
      
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.plantName)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
