import React, { useState } from 'react';
import NoteItem from './NoteItem/NoteItem';
import AddNewNote from './NewNote/AddNewNote';

const INITIAL_NOTES = [
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

const Notes = () => {
  // console.log("Notes.js")
  const [notes, setNotes] = useState(INITIAL_NOTES)

  const theParentFunc = (data) => {
    console.log("[THE PARENT FUNCTION]", data)
  }

  const addNewNote = note => {
    setNotes(prevState => {
      return [note, ...prevState]
    })
  }
  return (
    <div>
    <AddNewNote onNewNote={addNewNote} />
    <div className="row">
      <NoteItem note={notes[0]} 
        onCallParent={theParentFunc} />
      <NoteItem note={notes[1]} 
        onCallParent={theParentFunc}/>
    </div>
    </div>
  );
};

export default Notes;
