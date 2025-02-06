import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";
import "./Notes.css";

function Notes(props) {
  let navigate = useNavigate();
  const NoteContext = useContext(noteContext);
  let { notes, getNotes, editNote } = NoteContext;

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      getNotes();
      // eslint-disable-next-line
    } else {
      navigate("/login");
    }
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const refOpen = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [modal, setmodal] = useState({
    btitle: "",
    bdescription: "",
    btag: "",
  });
  const openText = (currentNote) => {
    refOpen.current.click();
    setmodal({
      btitle: currentNote.title,
      bdescription: currentNote.description,
      btag: currentNote.tag,
    });
  };

  const handleClick = (e2) => {
    //prevents  refresh of page
    e2.preventDefault();
    refClose.current.click();
    // console.log("updating note : " + note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Note Updated Successfully", "success");
  };

  const onChange1 = (e) => {
    //sets the value of the screen typed content to variables
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <Addnote showAlert={props.showAlert} />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal1"
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
                  <label htmlFor="title">
                    {" "}
                    <strong>Title</strong>
                  </label>
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
                  <label htmlFor="description">
                    <strong>Description</strong>
                  </label>
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
                  <label htmlFor="tag">
                    <strong>Tag</strong>
                  </label>
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

      {/* Modal For displaying the text note in modal */}
      {/* ------------------------------------------------------------------------------ */}
      <div>
        <button
          ref={refOpen}
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
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <strong>Title : </strong> {modal.btitle}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div id="tagidscroll" className="modal-body fs-5">
                <strong className="fs-5">Tag :</strong> {modal.btag}
              </div>
              <div className="modal-body ">
                {" "}
                <strong  className="fs-5">Description : </strong>{" "}
                {modal.bdescription}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}

      {/* here is where you display all notes */}
      <h2 style={{ marginLeft: "22px" }}>
        <strong style={{ color: "red" }}>All</strong> Notes
      </h2>
      <div
        id="scrollbarsetting"
        className="row shadow-lg mt-4 p-3 mb-5 bg-white rounded"
        style={{ height: "64vh" }}
      >
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              note={note}
              showAlert={props.showAlert}
              updateNote={updateNote}
              openText={openText}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
