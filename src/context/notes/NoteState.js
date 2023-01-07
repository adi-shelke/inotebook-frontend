import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) =>{
    const fetchedNotes =[
        {
          "_id": "63a831663f2291927af11b10",
          "user": "63a48bd075b8a23c18f225ca",
          "title": "Mahi's note",
          "description": "Get up buddy",
          "tag": "wakeUp",
          "date": "2022-12-25T11:17:58.218Z",
          "__v": 0
        },
        {
            "_id": "63a831663f2291927af14b10",
            "user": "63a48bd075b8a23c18f225ca",
            "title": "Mahi's note",
            "description": "Get up buddy",
            "tag": "wakeUp",
            "date": "2022-12-25T11:17:58.218Z",
            "__v": 0
          },
        {
            "_id": "63a831663f2691927af11b10",
            "user": "63a48bd075b8a23c18f225ca",
            "title": "Mahi's note",
            "description": "Get up buddy",
            "tag": "wakeUp",
            "date": "2022-12-25T11:17:58.218Z",
            "__v": 0
          },
          {
            "_id": "63a831654f2291927af11b10",
            "user": "63a48bd075b8a23c18f225ca",
            "title": "Mahi's note",
            "description": "Get up buddy",
            "tag": "wakeUp",
            "date": "2022-12-25T11:17:58.218Z",
            "__v": 0
          },
        {
          "_id": "63b974503cdbf75e561d2ce9",
          "user": "63a48bd075b8a23c18f225ca",
          "title": "Adi's Note",
          "description": "Go get some food",
          "tag": "Eat",
          "date": "2023-01-07T13:32:00.151Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(fetchedNotes)
    return(
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;