import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "./NoteItem.css";
const Noteitem = (props) => {
  //destructring api
  const NoteContext = useContext(noteContext);
  const { deleteNote } = NoteContext;

  //destructring props
  const { note, updateNote, openText } = props;

  //handeling delete with id
  const handleDelete = () => {
    deleteNote(note._id);
    props.showAlert("Note Deleted Successfully", "success");
  };
  return (
    <div className="col-md-3 my-3">
      <div className="card ">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary">
          Tag : {note.tag}
        </span>

        <div id="noteitemscroll" className="card-body">
          <div className="d-flex">
            <h5 className="card-title" style={{ width: "82%" }}>
              <strong style={{color:"red"}}>Title  </strong> : {note.title}
            </h5>
            <i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>

          <p className="card-text">
            <strong>Description : </strong> {note.description.slice(0, 200)}.
            {note.description.length > 200 ? (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  openText(note);
                }}
              >
                Read More
              </button>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
