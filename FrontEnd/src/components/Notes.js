import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

function Notes(props) {
  const NoteContext = useContext(noteContext);
  let { notes, getNotes, editNote } = NoteContext;

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e2) => {
    //prevents  refresh of page
    e2.preventDefault();
    refClose.current.click();
    // console.log("updating note : " + note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Note Updated Successfully","success")
  };

  const onChange1 = (e) => {
    //sets the value of the screen typed content to variables
    setnote({ ...note, [e.target.name]: e.target.value });
  };


  return (
    <div className="container">
      <Addnote showAlert={props.showAlert}/>

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
               <strong>Edit Note</strong>
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
                  <label htmlFor="title"> <strong>Title</strong></label>
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
                  <label htmlFor="description"><strong>Description</strong></label>
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
                  <label htmlFor="tag"><strong>Tag</strong></label>
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
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

       {/* here is where you display all notes */}
      <h2>Your  <strong style={{color:"red"}}>Note</strong></h2>
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} note={note} showAlert={props.showAlert} updateNote={updateNote} />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
