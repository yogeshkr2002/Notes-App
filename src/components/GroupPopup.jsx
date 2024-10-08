import React, { useState, useEffect, useRef } from "react";
import "./GroupPopup.css"; // Import your styles

const GroupPopup = ({ addGroup, setShowPopup }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#007bff"); // Default color
  const popupRef = useRef(null); // Ref for the popup content div

  // Predefined color options for the group circles
  const colorOptions = [
    "#b522e6",
    "#dd7cd2",
    "#a6e5ea",
    "#fd7e14",
    "#6f42c1",
    "#54b4eb",
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

  // Handle click outside the popup-content div
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close the popup when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopup]);

  return (
    <div className="group-popup">
      <div className="popup-content" ref={popupRef}>
        {/* Added wrapper for popup content */}
        <h2 className="popupHeading">Create New group</h2>
        <form onSubmit={handleSubmit}>
          <div className="groupNameText">
            <label className="label-1">Group Name</label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              required
              className="input"
            />
          </div>

          <div className="color-picker">
            <h4>Choose colour</h4>
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
            <button type="submit" className="createBtn">
              Create
            </button>
            {/* <button type="button" onClick={() => setShowPopup(false)}>
              Cancel
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupPopup;
