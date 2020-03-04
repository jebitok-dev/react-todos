import React, { useState, useEffect, useReducer } from 'react';
import AddNoteForm from './components/AddNoteForm'
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
      <AddNoteForm dispatch={dispatch}/>
    </div>
  )
}
export default App;
