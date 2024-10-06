// src/components/GroupCircle.jsx

import React from "react";
import "./GroupCircle.css"; // Import the styles for the circle

const GroupCircle = ({ groupName, color }) => {
  const initials = groupName
    ? groupName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase() // Get initials
    : ""; // Return empty string if groupName is undefined

  return (
    <div
      className="group-circle"
      style={{ backgroundColor: color }} // Set the circle's background color
    >
      {initials}
    </div>
  );
};

export default GroupCircle;
