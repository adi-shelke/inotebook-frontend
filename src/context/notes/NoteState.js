import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) =>{
  const host ="http://localhost:5000"
    const fetchedNotes =[]
      const [notes, setnotes] = useState(fetchedNotes)
      //Fetch all notes
      const fetchAllNote = async (title,description,tag) => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {  
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
          },
        });
        const json = await response.json()
        setnotes(json)
      }

      //Adding a Note
        const addNote = async (title,description,tag) => {
          const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {  
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
            },
            body: JSON.stringify({title, description, tag}) 
          });
          let retNote=(await response.json())
          let note={
            "_id": retNote._id,
            "user": retNote.user,
            "title": title,
            "description": description,
            "tag": tag,
            "date": retNote.date,
            "__v": 0
          }
          setnotes(notes.concat(note))
        }

      //Deleting a Note
      const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {  
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
          },
        });
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setnotes(newNotes)
      }


      //Editing a Note
      const editNote = async (id,title,description,tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
          },
          body: JSON.stringify({title, description, tag}) 
        });
        let newNotes=JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id)
          {
            newNotes[index].title=title
            newNotes[index].description=description
            newNotes[index].tag=tag
            break
          }
        }
        setnotes(newNotes)
      }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchAllNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;