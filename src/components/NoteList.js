import React from 'react'
import { connect } from 'react-redux'

import NoteListItem from './NoteListItem'  
// import selectNotes from '../selectors/notes'  //need to make

export const NoteList = (props) => (
  <div>
    {props.notes.length === 0 ? <p>Create a note to get started!</p> 
      : props.notes.map(note => <NoteListItem key={note.id} note={note}/>)}
  </div>
)

const mapStateToProps = (state) => ({
  notes: state.notes
})
 
export default connect(mapStateToProps)(NoteList)