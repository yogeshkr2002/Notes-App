import React, { useState } from "react";

const GroupPopup = ({ addGroup, setShowPopup }) => {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName) {
      addGroup(groupName);
      setGroupName("");
    }
  };

  return (
    <div className="group-popup">
      <div className="popup-content">
        <h3 className="popupHeading">Create New Group</h3>
        <form onSubmit={handleSubmit} className="popupForm">
          <div className="one">
            <label className="inputLabel">Group Name</label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              required
            />
          </div>
          <div className="two">
            <button type="submit">Create</button>
          </div>
        </form>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default GroupPopup;
