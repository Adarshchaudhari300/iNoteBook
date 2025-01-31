import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const note = [
    {
      _id: "679a1561a8a3cf34523544ad292a41",
      user: "6799fea328ac31778bc9f3ec",
      title: "this is a note",
      description: "des of a note is htis",
      tag: "personal note",
      date: "2025-01-29T11:47:45.653Z",
      __v: 0,
    },
    {
      _id: "679a15624235348a8a3cf4354ad292a44",
      user: "6799fea328ac31778bc9f3ec",
      title: "this is update",
      description: "updated note",
      tag: "personal note",
      date: "2025-01-29T11:47:52.576Z",
      __v: 0,
    },
    {
      _id: "679a2c68e5433a043623ca27d3d7ac8",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:26:00.719Z",
      __v: 0,
    },
    {
      _id: "679a2fcbd85d4434a0fcb0ae7dd",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:40:27.365Z",
      __v: 0,
    },
    {
      _id: "679a2c68e3a06c323a27d3d7ac8",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:26:00.719Z",
      __v: 0,
    },
    {
      _id: "679a2fcbd85d4a04234fcb0ae7dd",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:40:27.365Z",
      __v: 0,
    },
    {
      _id: "679a2c68e3a06ca645627d3d7ac8",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:26:00.719Z",
      __v: 0,
    },
    {
      _id: "679a2fc342bd85d4a0fcb0ae7dd",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:40:27.365Z",
      __v: 0,
    },
    {
      _id: "679a2c682435e3a06ca27d3d7ac8",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:26:00.719Z",
      __v: 0,
    },
    {
      _id: "679a2fcbd853455d4a0fcb0ae7dd",
      user: "6799fea328ac31778bc9f3ec",
      title: "cricket",
      description: "adarsh is not for prctice today",
      tag: "personal note",
      date: "2025-01-29T13:40:27.365Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(note);
  //addNote
  const addNote = (title, description, tag) => {
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
  //deleteNote
  const deleteNote = () => {};
  //editNote
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, deleteNote, addNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
