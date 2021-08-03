
import NoteItem from './NoteItem/NoteItem';
import AddNewNote from './NewNote/AddNewNote';

const notes = () => {
  // console.log("Notes.js")
  const notes = [
    {
      id: 1,
      title: "shopping",
      amount : 12.90,
      createdAt: new Date("Dec 21, 2019"),
    },
    {
      id: 2,
      title: "grocery",
      amount : 10.00,
      createdAt: new Date("Jan 26, 2020"),
    },
  ];

  const theParentFunc = (data) => {
    console.log("[THE PARENT FUNCTION]", data)
  }

  return (
    <div>
    <AddNewNote />
    <div className="row">
      <NoteItem note={notes[0]} 
        onCallParent={theParentFunc} />
      <NoteItem note={notes[1]} 
        onCallParent={theParentFunc}/>
    </div>
    </div>
  );
};

export default notes;
