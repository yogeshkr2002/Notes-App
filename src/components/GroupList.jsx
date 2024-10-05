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
            onClick={() => setSelectedGroup(group)}
            className="listItem"
          >
            <GroupCircle groupName={group} /> {group}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
