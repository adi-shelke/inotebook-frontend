import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
export const NoteItem = (props) => {
  const notesContext = useContext(NoteContext);
  const {deleteNote} = notesContext;
  const note = props.note;
  const updateNote=props.updateNote
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <div className="d-flex align-items-center my-2">
          <h5 className="card-title my-0">{note.title}</h5>
          <i className="fa-regular fa-trash-can mx-2"onClick={()=>{deleteNote(note.id)}}></i> 
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>

            </div>
          <p className="card-text">
            {note.description}.
          </p>
        </div>
      </div>
    </div>
  );
};
