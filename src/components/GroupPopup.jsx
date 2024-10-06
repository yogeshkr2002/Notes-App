// src/components/GroupPopup.jsx

import React, { useState } from "react";
import "./GroupPopup.css"; // Import your styles

const GroupPopup = ({ addGroup, setShowPopup }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#007bff"); // Default color

  // Predefined color options for the group circles
  const colorOptions = [
    "#007bff",
    "#28a745",
    "#ff073a",
    "#fd7e14",
    "#6f42c1",
    "#17a2b8",
    "#ffc107",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName) {
      // Create the new group object with color
      const newGroup = { name: groupName, color: selectedColor };
      addGroup(newGroup); // Pass the new group to the parent component
      setGroupName(""); // Reset the input
      setShowPopup(false); // Close the popup
    }
  };

  return (
    <div className="group-popup">
      <div className="popup-content">
        {" "}
        {/* Added wrapper for popup content */}
        <h2 className="popupHeading">Add New Group</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            required
          />

          <div className="color-picker">
            <h4>Select a color:</h4>
            <div className="color-options">
              {colorOptions.map((color) => (
                <div
                  key={color}
                  className={`color-circle ${
                    selectedColor === color ? "selected" : ""
                  }`} // Check if this color is selected
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)} // Set the selected color
                />
              ))}
            </div>
          </div>

          <div className="two">
            <button type="submit">Add Group</button>
            <button type="button" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupPopup;
