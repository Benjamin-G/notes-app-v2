import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { setSelectedNote } from '../actions/selectednote'

const NoteListItem = (props) => {
  const className = props.note.id === props.selectedNoteId ? 'item item--selected' : 'item' 
    return (
      <div className={className} onClick={() => props.setSelectedNote(props.note.id)}>
        <h5 className="item__title"> { props.note.title || 'Untitled note' } </h5>
        <p className="item__subtitle"> {moment(props.note.updatedAt).format('MM/DD/YY h:mma')} </p>
      </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  setSelectedNote: (noteId) => dispatch(setSelectedNote(noteId))
})

const mapStateToProps = (state) => ({
  selectedNoteId: state.selectedNoteId
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteListItem)