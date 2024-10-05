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
        <h3>Create Group</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group Name"
            required
          />
          <button type="submit">Create</button>
        </form>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default GroupPopup;
