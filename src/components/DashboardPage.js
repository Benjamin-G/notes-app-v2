import React from 'react'

import { NoteList } from './NoteList'
import { Editor } from './Editor'

const DashboardPage = () => (
  <div>
    <div className="page-content">
      <div className="page-content__sidebar">
        <NoteList/>
      </div>
      <div className="page-content__main">
        <Editor/>
      </div>
    </div>
  </div>
)

export default DashboardPage
