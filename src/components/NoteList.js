import React from 'react'
import { connect } from 'react-redux'

import AddNoteButtom from './AddNoteButton'

export const NoteList = (props) => (
  <div>
    <AddNoteButtom/>
    <p className="empty-item">Create a note to get started!</p> 
  </div>
)

