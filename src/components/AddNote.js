import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
export const AddNote = () => {
  const notesContext = useContext(NoteContext);
  const {addNote } = notesContext;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const addNoteFunction = (event) => {
    event.preventDefault()
    addNote(note.title,note.description,note.tag)
    setnote({ title: "", description: "", tag: "" })
  };
  const onChange = (event) => {
    setnote({ ...note, [event.target.name]: event.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={onChange}
            type="textarea"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={addNoteFunction}
          disabled={note.title.length<5 || note.description.length<5}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};
