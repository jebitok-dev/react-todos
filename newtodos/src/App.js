import React, { useState, useEffect, useReducer } from 'react';
import './App.css';

const notesReducer = (state, action) => {
  switch(action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [
        ...state,
        { title: action.title, body: action.body }
      ]
    case 'REMOVE_NOTE':
      return state.filter ((note) => note.title !== action.title )
    default:
      return state;
  }
}

const App = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const addNote = (e) => {
    e.preventDefault();
    dispatch({
type: 'ADD_NOTE',
       title,
       body
    })
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes})
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => {
        return (
          <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
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
