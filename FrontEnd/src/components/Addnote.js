import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  const NoteContext = useContext(noteContext);
  let { addNote } = NoteContext;
  const [note, setnote] = useState({ title: "", description: "", tag: "default" });

  const handleClick = (e2) => {
    e2.preventDefault();
    addNote(note.title,note.description,note.tag);
  };

  const onChange1 = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add your Note</h2>
        <form>
          <div className="form-group my-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={onChange1}
              name="title"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={onChange1}
              name="description"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-2"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
