import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

function Notes() {
  const NoteContext = useContext(noteContext);
  let { notes, getNotes} = NoteContext;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  
  const ref = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e2) => {
    //prevents  refresh of page
    e2.preventDefault();
    console.log("updating note : "+note)
  };

  const onChange1 = (e) => {
    //sets the value of the screen typed content to variables
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <Addnote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-2">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    onChange={onChange1}
                    name="etitle"
                    value={note.etitle}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    onChange={onChange1}
                    name="edescription"
                    value={note.edescription}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    onChange={onChange1}
                    name="etag"
                    value={note.etag}
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
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>Your Note</h2>
      <div className="row">
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
