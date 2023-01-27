import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
export const Alert = () => {
  const notesContext = useContext(NoteContext);
  const {alert} = notesContext;

  return (
    <div>
     {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      {alert.msg}
      </div>}
    </div>
  );
};
