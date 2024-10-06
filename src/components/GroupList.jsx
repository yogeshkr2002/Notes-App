// src/components/GroupList.jsx

import React from "react";
import GroupCircle from "./GroupCircle";
import "./groupList.css";

const GroupList = ({ groups, setSelectedGroup }) => {
  return (
    <div className="groupListContainer">
      <ul className="group-list">
        {groups.map((group, index) => (
          <li
            key={index}
            onClick={() => setSelectedGroup(group)} // Pass the entire group object
            className="listItem"
          >
            <GroupCircle groupName={group.name} color={group.color} />
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
