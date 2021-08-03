import React, { useState } from 'react';
import NoteItem from './NoteItem/NoteItem';
import AddNewNote from './NewNote/AddNewNote';
import { v4 } from 'uuid';

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
  const [isOpen, setIsOpen] = useState(false);

  const addNewNote = ({title, amount, createdAt}) => {
    const note = {
      id : v4(),
      title,
      amount,
      createdAt
    }
    setNotes(prevState => {
      return [...prevState, note]
    })
    setIsOpen(false)
  }

  const noteCollection = notes.map(note => <NoteItem note={note} key={note.id}/>)

  const cancelHandler = () => {
    setIsOpen(false)
  }
  return (
    <div>
    { !isOpen && <button className="btn btn-secondary" onClick={() => setIsOpen(true)}>Add New Note</button>}
    { isOpen && <AddNewNote onCancel={cancelHandler} onNewNote={addNewNote} />}
    
    <br/>
    <div className="row">
    {/*notes.map(note =>{ 
      return <NoteItem key={note.id} note={note} />
    })*/}
    {noteCollection}
    </div>
    </div>
  );
};

export default Notes;
