import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {note.tag}
          </span>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="fontawesome-icon mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert(
                "Your note has been deleted successfully",
                "success"
              );
            }}
          />
          <FontAwesomeIcon
            icon={faPen}
            className="fontawesome-icon mx-2"
            onClick={() => {
              updateNote(note);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
