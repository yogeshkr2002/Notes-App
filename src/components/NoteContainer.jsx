import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./noteContainer.css";

const NoteContainer = ({
  selectedGroup,
  existingNotes,
  onAddNote,
  setSelectedGroup,
}) => {
  const [noteInput, setNoteInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleAddNote = () => {
    if (noteInput) {
      onAddNote(noteInput);
      setNoteInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNote();
    }
  };

  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
    return initials;
  };

  return (
    <div className="note-container">
      {/* Header with Back Arrow, Group Icon, and Name */}
      <div className="heading">
        <div className="backBtn" onClick={() => setSelectedGroup(null)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div
          className="group-profile"
          style={{ backgroundColor: selectedGroup.color }}
        >
          {getInitials(selectedGroup.name)}
        </div>
        <h2>{selectedGroup.name}</h2>
      </div>

      <div className="notes-list">
        <div className="content">
          {existingNotes?.map((note, index) => (
            <div key={index} className="note-item">
              {note.text}
              <div className="note-meta">
                <span>{note.date}</span> • <span>{note.time}</span>
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
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="textArea"
          />
        </div>
        <div className="addButton">
          <img
            src={isFocused ? "/image/blue.png" : "/image/brown.png"}
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
