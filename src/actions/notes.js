import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_NOTE
export const addNote = (note) => ({ 
    type: 'ADD_NOTE',
    note
})

export const startAddNote = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
   
    const note = {  
      title: '',
      body: '',
      updatedAt: 0 
    }
    
    return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
      dispatch(addNote({ id: ref.key, ...note }))
    })
  }
}