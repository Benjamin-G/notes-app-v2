import React from 'react'

import { NoteListPanel } from './NoteListPanel'
import Editor from './Editor'

const DashboardPage = () => (
  <div>
    <div className="page-content">
      <div className="page-content__sidebar">
        <NoteListPanel/>
      </div>
      <div className="page-content__main">
        <Editor/>
      </div>
    </div>
  </div>
)

export default DashboardPage
