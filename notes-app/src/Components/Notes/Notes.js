import NoteDate from './NoteDate/NoteDate';

const notes = () => {
    const note = {
        id : 1,
        title : "shopping",
        createdAt : new Date("Dec 21, 2019")
    }
    
  return (
    <div className="row">
      <div className="col-sm-4 col-md-4">
        <div className="card">
          <div className="card-header">
            <h6 className="text-center">{note.title.toUpperCase()}</h6>
          </div>
          <div className="card-body">
            <NoteDate noteDate = {note.createdAt}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notes;
