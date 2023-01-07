import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { NoteItem } from "./NoteItem";
export const Notes = () => {
  const notesContext = useContext(NoteContext);
  const { notes, setNotes } = notesContext;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem  note={note} key={note._id}/>;
      })}
    </div>
  );
};
