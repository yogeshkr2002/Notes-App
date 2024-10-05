// src/components/GroupCircle.jsx

import React from "react";
import "./GroupCircle.css"; // Import the styles for the circle

const GroupCircle = ({ groupName }) => {
  const initials = groupName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase(); // Get initials

  return <div className="group-circle">{initials}</div>;
};

export default GroupCircle;
