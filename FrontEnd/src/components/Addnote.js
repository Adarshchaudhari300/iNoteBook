import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  //initalization of context api
  const NoteContext = useContext(noteContext);
  //destructring just like done in props
  let { addNote } = NoteContext;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e2) => {
    //prevents  refresh of page
    e2.preventDefault();
    //pushes data back to NoteSate
    addNote(note.title, note.description, note.tag);
  };

  const onChange1 = (e) => {
    //sets the value of the screen typed content to variables
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>
          Add your <strong style={{ color: "red" }}>Note</strong>
        </h2>
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
          <div className="form-group my-2">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              onChange={onChange1}
              name="tag"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success my-2"
            onClick={handleClick}
          >
            Add-note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
