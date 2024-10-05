import React, { useState } from "react";
import GroupList from "./components/GroupList.jsx";
import GroupPopup from "./components/GroupPopup.jsx";
import NoteContainer from "./components/NoteContainer.jsx";
import "./App.css";

const App = () => {
  const [groups, setGroups] = useState([]); // State for storing groups
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null); // Currently selected group
  const [notes, setNotes] = useState({}); // State to manage notes for each group

  // Function to add a new group
  const addGroup = (name) => {
    setGroups((prevGroups) => [...prevGroups, name]);
    setShowPopup(false);
  };

  // Function to add a note to the selected group
  const addNoteToGroup = (noteInput) => {
    if (selectedGroup) {
      setNotes((prev) => ({
        ...prev,
        [selectedGroup]: [...(prev[selectedGroup] || []), noteInput],
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
            existingNotes={notes[selectedGroup]}
            onAddNote={addNoteToGroup}
          />
        ) : (
          // Render an image that covers the full width and height of rightBox if no group is selected

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
