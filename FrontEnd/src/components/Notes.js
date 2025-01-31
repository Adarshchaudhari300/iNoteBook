import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

function Notes() {
  const NoteContext = useContext(noteContext);
  let { notes} = NoteContext;
  return (
    <div className="container">
      <Addnote/>
      <h2>Your Note</h2>
      <div className="row">
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
}

export default Notes;
