import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing an arrow icon from react-icons
import "./noteContainer.css";

const NoteContainer = ({ selectedGroup, existingNotes, onAddNote }) => {
  const [noteInput, setNoteInput] = useState(""); // Local state for note input

  const handleAddNote = () => {
    if (noteInput) {
      onAddNote(noteInput); // Call the function passed as prop to add note
      setNoteInput(""); // Clear input after adding
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNote(); // Call the function to add note on Enter key
    }
  };

  // Function to get initials from the group name
  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
    return initials;
  };

  return (
    <div className="note-container">
      {/* Header with Group Icon and Name */}
      <div className="heading">
        <div className="group-header">
          <div
            className="group-profile"
            style={{ backgroundColor: selectedGroup.color }}
          >
            {getInitials(selectedGroup.name)}{" "}
            {/* Displaying initials of group name */}
          </div>
          <h2>{selectedGroup.name}</h2>
        </div>
      </div>
      <div className="notes-list">
        <div className="content">
          {existingNotes?.map((note, index) => (
            <div key={index} className="note-item">
              {note.text} {/* Displaying note text */}
              <div className="note-meta">
                <span>{note.date}</span> • <span>{note.time}</span>{" "}
                {/* Displaying real-time date and time */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottomBox">
        <div className="textBox">
          <textarea
            placeholder="Enter your text here........"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="textArea"
          />
        </div>
        <div className="addButton">
          <FiArrowRight onClick={handleAddNote} className="arrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default NoteContainer;
