import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import { AddNote } from "./AddNote";
import { NoteItem } from "./NoteItem";
export const Notes = () => {
  const notesContext = useContext(NoteContext);
  const { notes, fetchAllNote } = notesContext;

  useEffect(() => {
    fetchAllNote();
    // eslint-disable-next-line
  }, []);

  const [note, setnote] = useState({ etitle: "", edescription: "", etag: "" });

  const updateNote = (currentNote) => {
    editModal.current.click();
    setnote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag}) 
  };

  const editModal = useRef(null);
  const addNoteFunction = (event) => {
    console.log("updating the note",note)
    event.preventDefault()
  };
  
  const onChange = (event) => {
    setnote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <>
      <AddNote />

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
        ref={editModal}
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex flex-column">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={onChange}
                    value={note.etitle}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    onChange={onChange}
                    value={note.edescription}
                    type="textarea"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    onChange={onChange}
                    value={note.etag}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={addNoteFunction}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem note={note} key={note._id} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
};
