import React from 'react'
import { connect } from 'react-redux'

import NoteListItem from './NoteListItem' 

export const NoteList = (props) => (
  <div>
    {props.notes.length === 0 ? <p className="empty-item">Create a note to get started!</p> 
      : props.notes.sort((a,b) => b.updatedAt - a.updatedAt).map(note => <NoteListItem key={note.id} note={note}/>)
    }
  </div>
)

const mapStateToProps = (state) => ({
  notes: state.notes
})
 
export default connect(mapStateToProps)(NoteList)