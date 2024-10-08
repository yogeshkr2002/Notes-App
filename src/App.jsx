import React, { useState, useEffect } from "react";
import GroupList from "./components/GroupList.jsx";
import GroupPopup from "./components/GroupPopup.jsx";
import NoteContainer from "./components/NoteContainer.jsx";
import "./App.css";

const App = () => {
  const [groups, setGroups] = useState(() => {
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addGroup = (group) => {
    setGroups((prevGroups) => [...prevGroups, group]);
    setShowPopup(false);
  };

  const addNoteToGroup = (noteInput) => {
    if (selectedGroup) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      const formattedTime = currentDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

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
      <div
        className="leftBox"
        style={{
          display: isMobile && selectedGroup ? "none" : "",
        }}
      >
        <h1 className="titleHeading">Pocket Notes</h1>
        <div className="list">
          <GroupList
            groups={groups}
            setSelectedGroup={setSelectedGroup}
            selectedGroup={selectedGroup}
          />
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

      <div
        className="rightBox"
        style={{
          display: isMobile && !selectedGroup ? "none" : "flex",
        }}
      >
        {selectedGroup ? (
          <NoteContainer
            selectedGroup={selectedGroup}
            existingNotes={notes[selectedGroup.name]}
            onAddNote={addNoteToGroup}
            setSelectedGroup={setSelectedGroup}
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
