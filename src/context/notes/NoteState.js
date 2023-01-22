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
          // console.log("adding a new note")
          let note={
            "_id": "63b974503cdbf75e561d2ce18",
            "user": "63a48bd075b8a23c18f225ca",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-01-07T13:32:00.151Z",
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
      const editNode = async (id,title,description,tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
          },
          body: JSON.stringify({title, description, tag}) 
        });
        const json = response.json(); 
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id===id)
          {
            element.title=title
            element.description=description
            element.tag=tag
          }
          
        }
      }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNode,fetchAllNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;