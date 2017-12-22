//import uuid from 'uuid' //Do I need this?
import database from '../firebase/firebase'

// ADD_NOTE
const addNote = (note) => ({ type: 'ADD_NOTE', note })

export const startAddNote = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
   
    const note = {  
      title: 'Untitled Note',
      body: '',
      updatedAt: 0 
    }
    
    return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
      dispatch(addNote({ id: ref.key, ...note }))
    })
  }
}

// SET_NOTES
const setNotes = (notes) => ({ type: 'SET_NOTES', notes})

export const startSetNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid

    return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
      const notes = []

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setNotes(notes))
    })
  }
}


