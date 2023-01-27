import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
  const host ="https://noted-aaej.onrender.com"
  // let token=localStorage.getItem("token")
  const [token, setToken] = useState(localStorage.getItem("token"))
    const fetchedNotes =[]
      const [notes, setnotes] = useState(fetchedNotes)
      const [alert, setAlert] = useState(null)
    const showAlert =(message,type) =>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
      
      //Fetch all notes
      const fetchAllNote = async (title,description,tag) => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {  
            'Content-Type': 'application/json',
            // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
            'auth-token' : token
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
              // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
              'auth-token' : token
            },
            body: JSON.stringify({title, description, tag}) 
          });
          let note=(await response.json())
          setnotes(notes.concat(note))
          showAlert("Note added successfully","success")
        }
      //Deleting a Note
      const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {  
            'Content-Type': 'application/json',
            // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
            'auth-token' : token
          },
        });
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setnotes(newNotes)
        showAlert("Note deleted successfully","danger")
      }


      //Editing a Note
      const editNote = async (id,title,description,tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDhiZDA3NWI4YTIzYzE4ZjIyNWNhIn0sImlhdCI6MTY3MTc3ODI0Nn0.-_pG9MUpfeTEJjmHfGu0ik8SbiFAgXgoo3EzlQkAzAI'
            'auth-token' : token
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
        showAlert("Note updated successfully","success")
      }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchAllNote,setToken,token,alert}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;