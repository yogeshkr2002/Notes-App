import React, { useState } from "react";

const NoteForm = ({ groupName }) => {
  const [note, setNote] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();
    // Logic to save the note for the selected group
    console.log(`Note added to ${groupName}: ${note}`);
    setNote(""); // Clear the input after adding
  };

  return (
    <div className="note-form">
      <h3>Notes for {groupName}</h3>
      <form onSubmit={handleAddNote}>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
          required
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
