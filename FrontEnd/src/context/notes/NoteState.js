import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const note = [];
  const [notes, setNotes] = useState(note);

  //Get all Notes--------------------------------------------------------------------------------------
  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZlYTMyOGFjMzE3NzhiYzlmM2VjIn0sImlhdCI6MTczODE0NTQ0M30.QoA_BK_0XSGN0bAx3uwVvEuM3vaPToBdubhGRoTIy5g",
      },
    });
    const json1 = await response.json();
    console.log(json1);

    //code for setting all notes
    setNotes(json1);
  };

  //addNote----------------------------------------------------------------------------------------
  const addNote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZlYTMyOGFjMzE3NzhiYzlmM2VjIn0sImlhdCI6MTczODE0NTQ0M30.QoA_BK_0XSGN0bAx3uwVvEuM3vaPToBdubhGRoTIy5g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    //code for adding
    const note = {
      _id: "679a1561a8a3cf34523544ad292a41",
      user: "6799fea328ac31778bc9f3ec",
      title: title,
      description: description,
      tag: tag,
      date: "2025-01-29T11:47:45.653Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //deleteNote---------------------------------------------------------------------------------
  const deleteNote = async (id) => {
    //api calls

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZlYTMyOGFjMzE3NzhiYzlmM2VjIn0sImlhdCI6MTczODE0NTQ0M30.QoA_BK_0XSGN0bAx3uwVvEuM3vaPToBdubhGRoTIy5g",
      },
    });
    const json = response.json();
    console.log(json);

    //filters the entire notes array and removes the note with _id==id
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //editNote----------------------------------------------------------------------------------------------------
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZlYTMyOGFjMzE3NzhiYzlmM2VjIn0sImlhdCI6MTczODE0NTQ0M30.QoA_BK_0XSGN0bAx3uwVvEuM3vaPToBdubhGRoTIy5g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    //edit note content code
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //---------------------------------------------------------------------------------------------------------------------
  return (
    <NoteContext.Provider
      value={{ notes, deleteNote, addNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
