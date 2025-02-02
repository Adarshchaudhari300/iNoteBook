import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  //destructring api
  const NoteContext = useContext(noteContext);
  const { deleteNote } = NoteContext;

  //destructring props
  const { note ,updateNote} = props;

  //handeling delete with id
  const handleDelete = () => {
    deleteNote(note._id);
  };
  return (
    <div className="col-md-3 my-3">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title"><strong>Title : </strong> {note.title}</h5>
          <p className="card-text"><strong>Description : </strong> {note.description}.</p>
          <i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
