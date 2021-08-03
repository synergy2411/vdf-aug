import React from 'react';
import NoteDate from '../NoteDate/NoteDate';

const NoteItem = props => {
    // const [title, setTitle] = useState(props.note.title)
    return (
        <div className="col-sm-4 col-md-4">
        <div className="card">
          <div className="card-header">
            <h6 className="text-center">{props.note.title.toUpperCase()}</h6>
          </div>
          <div className="card-body">
            <NoteDate noteDate={props.note.createdAt} />
            <br/>
            <p>Expense : ${props.note.amount}</p>
            {/*
                <button onClick={() => {setTitle("UPDATED!")}}>Update Title</button>
            */}
          </div>
        </div>
      </div>
    )

}

export default NoteItem;