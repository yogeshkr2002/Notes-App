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

  return (
    <div className="note-container">
      <div className="heading">My Notes</div>
      <div className="notes-list">
        <div className="content">
          {existingNotes?.map((note, index) => (
            <div key={index} className="note-item">
              {note}
              <div className="note-meta">
                <span>9 Mar 2023</span> • <span>10:10 AM</span>
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
