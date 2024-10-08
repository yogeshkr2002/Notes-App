import React from "react";
import GroupCircle from "./GroupCircle";
import "./groupList.css";

const GroupList = ({ groups, setSelectedGroup, selectedGroup }) => {
  return (
    <div className="groupListContainer">
      <ul className="group-list">
        {groups.map((group, index) => (
          <li
            key={index}
            onClick={() => setSelectedGroup(group)} // Pass the entire group object
            className={`listItem ${
              selectedGroup?.name === group.name ? "selected" : ""
            }`} // Add 'selected' class if the group is selected
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
