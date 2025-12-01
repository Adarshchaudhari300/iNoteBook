import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";
import "./Notes.css";

function Notes(props) {
  const navigate = useNavigate();
  const NoteContext = useContext(noteContext);
  const { notes, getNotes, editNote, addNote } = NoteContext;

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const refEdit = useRef(null);
  const refClose = useRef(null);
  const refView = useRef(null);

  const updateNote = (currentNote) => {
    refEdit.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [modal, setModal] = useState({
    btitle: "",
    bdescription: "",
    btag: "",
  });

  const openText = (currentNote) => {
    refView.current.click();
    setModal({
      btitle: currentNote.title,
      bdescription: currentNote.description,
      btag: currentNote.tag,
    });
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note Updated Successfully", "success");
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    addNote(newNote.title, newNote.description, newNote.tag);
    setNewNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };

  const onEditChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onAddChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="notes-container animate-fadeIn">
        <div className="notes-header">
          <h1>Your Notes Collection</h1>
          <p className="notes-subtitle">Create, organize, and manage your thoughts</p>
        </div>

        <div className="notes-content">
          <div className="notes-add-section">
            <div className="add-note-card">
              <div className="add-note-header">
                <h2>Create New Note</h2>
              </div>

              <div className="add-note-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={newNote.title}
                      onChange={onAddChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="4"
                      value={newNote.description}
                      onChange={onAddChange}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tag"
                      value={newNote.tag}
                      onChange={onAddChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={newNote.title.length < 3 || newNote.description.length < 5}
                    onClick={handleAddClick}
                  >
                    Add Note
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="notes-list-section">
            <div className="notes-list-header">
              <h2>Your Notes</h2>
              {notes.length === 0 && <p>No notes to display.</p>}
            </div>

            <div className="notes-grid">
              {notes.map((note) => (
                <Noteitem
                  key={note._id}
                  note={note}
                  showAlert={props.showAlert}
                  updateNote={updateNote}
                  openText={openText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Hidden Modal Buttons (OUTSIDE animated container) ---------- */}
      <button
        ref={refEdit}
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#editNoteModal"
      ></button>

      <button
        ref={refView}
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#viewNoteModal"
      ></button>

      {/* --------------------- Edit Note Modal --------------------- */}
      <div
        className="modal fade"
        id="editNoteModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="etitle"
                    value={note.etitle}
                    onChange={onEditChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="edescription"
                    rows="4"
                    value={note.edescription}
                    onChange={onEditChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    name="etag"
                    value={note.etag}
                    onChange={onEditChange}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleEditClick}>
                Update Note
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* --------------------- View Note Modal --------------------- */}
      <div
        className="modal fade"
        id="viewNoteModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">{modal.btitle}</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <span className="badge bg-secondary mb-3">{modal.btag}</span>
              <p>{modal.bdescription}</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
