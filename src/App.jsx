import React, { useState, useEffect } from "react";
import GroupList from "./components/GroupList.jsx";
import GroupPopup from "./components/GroupPopup.jsx";
import NoteContainer from "./components/NoteContainer.jsx";
import "./App.css";

const App = () => {
  const [groups, setGroups] = useState(() => {
    // Retrieve saved groups from localStorage
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(() => {
    // Retrieve saved notes from localStorage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  // Save groups to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Function to add a new group
  const addGroup = (group) => {
    setGroups((prevGroups) => [...prevGroups, group]);
    setShowPopup(false);
  };

  // Function to add a note to the selected group
  const addNoteToGroup = (noteInput) => {
    if (selectedGroup) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}`;
      const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

      setNotes((prev) => ({
        ...prev,
        [selectedGroup.name]: [
          ...(prev[selectedGroup.name] || []),
          { text: noteInput, date: formattedDate, time: formattedTime },
        ],
      }));
    }
  };

  return (
    <div className="appContainer">
      <div className="leftBox">
        <h1
          style={{ height: "15%", alignContent: "center", marginLeft: "150px" }}
        >
          Pocket Notes
        </h1>
        <div className="list">
          <GroupList groups={groups} setSelectedGroup={setSelectedGroup} />
        </div>
        <div className="imgBox">
          <img
            src="/image/pic3.jpg"
            className="createGroupBtn"
            onClick={() => setShowPopup(true)}
            alt="Create Group Button"
          />
        </div>
        {showPopup && (
          <GroupPopup addGroup={addGroup} setShowPopup={setShowPopup} />
        )}
      </div>

      <div className="rightBox">
        {selectedGroup ? (
          <NoteContainer
            selectedGroup={selectedGroup}
            existingNotes={notes[selectedGroup.name]}
            onAddNote={addNoteToGroup}
          />
        ) : (
          <img
            src="/image/pic2.jpg"
            alt="No Group Selected"
            className="defaultImg"
          />
        )}
      </div>
    </div>
  );
};

export default App;
