import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter plant name..."
          name="plantName"
          value={editFormData.plantName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      {/* <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="buildingName"
          value={editFormData.buildingName}
          onChange={handleEditFormChange}
        ></input>
      </td> */}
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter "
          name="gardenNumber"
          value={editFormData.gardenNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
