import moment from 'moment'
import database from '../firebase/firebase'

// ADD_NOTE
const addNote = (note) => ({ type: 'ADD_NOTE', note })

export const startAddNote = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
   
    const note = {  
      title: 'Untitled Note',
      body: '',
      updatedAt: moment().valueOf()
    }
    
    return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
      dispatch(addNote({ id: ref.key, ...note }))
    })
  }
}

// REMOVE_NOTE
const removeNote = (id) => ({type: 'REMOVE_NOTE' , id })

export const startRemoveNote = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
      dispatch(removeNote(id))
    })
  }
}

// EDIT_NOTE 
const editNote = (id, updates) => ({type: 'EDIT_NOTE', id, updates })

export const startEditNote = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/notes/${id}`).update({ ...updates }).then(() => {
      dispatch(editNote(id,updates))
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


