import React from 'react'
import { connect } from 'react-redux'

import AddNoteButtom from './AddNoteButton'
import NoteList from './NoteList'

export const NoteListPanel = () => (
  <div className="item-list">
    <AddNoteButtom/>
    <NoteList/>
  </div>
)

