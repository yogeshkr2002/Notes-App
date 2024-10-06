import React, { useState } from "react";
import "./noteContainer.css";

const NoteContainer = ({ selectedGroup, existingNotes, onAddNote }) => {
  const [noteInput, setNoteInput] = useState(""); // Local state for note input
  const [isFocused, setIsFocused] = useState(false); // State to track if textarea is focused

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
        <div
          className="group-profile"
          style={{ backgroundColor: selectedGroup.color }}
        >
          {getInitials(selectedGroup.name)}{" "}
          {/* Displaying initials of group name */}
        </div>
        <h2>{selectedGroup.name}</h2>
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
            placeholder="Enter your text here..."
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)} // Set focused state when textarea is focused
            onBlur={() => setIsFocused(false)} // Set unfocused state when textarea is blurred
            className="textArea"
          />
        </div>
        <div className="addButton">
          <img
            src={isFocused ? "/image/blue.png" : "/image/brown.png"} // Use blue.png when focused, brown.png when not
            alt="Next"
            onClick={handleAddNote}
            className="arrowIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteContainer;
