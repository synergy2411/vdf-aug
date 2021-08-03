import NoteDate from '../NoteDate/NoteDate';
import React, { useState } from 'react';

const NoteItem = props => {
    const [title, setTitle] = useState(props.note.title)
    // console.log("NoteItem.js")
    // console.log("PROPS - ", props);
    // let title = props.note.title;
    
    const clickHandler = () => {
        setTitle("Updated!!!")
        // props.onCallParent({message : "SUCCESS"})
        // title = "Updated!"
        // console.log("[CLICK HANDLER]", title)
    }

    return (
        <div className="col-sm-4 col-md-4">
        <div className="card">
          <div className="card-header">
            <h6 className="text-center">{title.toUpperCase()}</h6>
          </div>
          <div className="card-body">
            <NoteDate noteDate={props.note.createdAt} />
            <br/>
            <button className="btn btn-primary btn-sm" 
                onClick={clickHandler} >Change The title</button>
          </div>
        </div>
      </div>
    )

}

export default NoteItem;