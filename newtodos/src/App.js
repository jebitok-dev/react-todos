import React, { useState } from 'react';
import './App.css';
//import {addComment} from '@babel/types'

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {title, body}
    ])
    setTitle('');
    setBody('');
  }

  //subtraction [-1]
  //reset the value to 0[reset]
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => {
        return (
          <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            </div>
        )
      })}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  )
}
export default App;
