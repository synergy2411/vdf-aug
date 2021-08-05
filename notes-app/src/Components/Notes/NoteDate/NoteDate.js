import StateContext from "../../../context/state-context";
import React, { useContext } from "react";

const NoteDate = (props) => {
  // console.log("NoteDate.js")
  const month = props.noteDate.toLocaleString("en-US", { month: "long" });
  const day = props.noteDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.noteDate.getFullYear();

  const ctx = useContext(StateContext);

  return (
    <div>
      <p>Token : {ctx.token}</p>
      <p>
        Created At : <br />
        <span className="text-muted">{`${month} ${day}, ${year}`}</span>
      </p>
    </div>
  );
};

export default NoteDate;
