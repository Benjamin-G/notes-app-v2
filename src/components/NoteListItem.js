import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { setSelectedNote } from '../actions/selectednote'

const NoteListItem = (props) => {
  // const className = props.note.selected ? 'item item--selected' : 'item'  (this can also be set on redux!)
  // className={className} onClick={() => { props.Session.set('selectedNoteId', props.note._id) }} for div
    return (
      <div onClick={() => props.setSelectedNote(props.note.id)}>
        <h5 className="item__title">
          { props.note.title || 'Untitled note' }</h5>
        <p className="item__subtitle">
          {moment(props.note.updatedAt).format('MM/DD/YY h:mma')}</p>
      </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  setSelectedNote: (noteId) => dispatch(setSelectedNote(noteId))
})

export default connect(undefined, mapDispatchToProps)(NoteListItem)