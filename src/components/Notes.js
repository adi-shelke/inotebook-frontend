import React, { useContext,useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import { AddNote } from "./AddNote";
import { NoteItem } from "./NoteItem";
export const Notes = () => {
  const notesContext = useContext(NoteContext);
  const { notes,fetchAllNote} = notesContext;
  useEffect(() => {
    fetchAllNote()
    // eslint-disable-next-line
},[])
  
  return (
    <>
    <AddNote />
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem  note={note} key={note._id}/>;
      })}
    </div>
    </>
  );
};
