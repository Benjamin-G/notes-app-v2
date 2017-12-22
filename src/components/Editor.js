import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { setSelectedNote } from '../actions/selectednote'
import { startRemoveNote, startEditNote } from '../actions/notes'
import RemoveModal from './RemoveModal'

class Editor extends React.Component {
  state = {
    title: '',
    body: '',
    isModalOpen: false
  }

  // Handle Edits
  handleTitleChange = (e) => {
    const title = e.target.value
    this.setState({ title })
    this.props.startEditNote(this.props.selectedNoteId, { title , updatedAt: moment().valueOf() })
  }

  handleBodyChange = (e) => {
    const body = e.target.value
    this.setState({ body })
    this.props.startEditNote(this.props.selectedNoteId, { body , updatedAt: moment().valueOf() })
  }

  // Handle Remove
  openModal = () =>{
    this.setState({isModalOpen: true})
  }
  handleConfirmedRemove = () => {
    this.setState({isModalOpen: false})
    this.props.startRemoveNote(this.props.selectedNoteId)
    this.props.setSelectedNote("")
  }
  handleDeniedRemove = () => {
    this.setState({isModalOpen: false})
  }

  // Lifecycle Methods
  componentDidUpdate = (prevProps, prevState) => {
    const currentNoteId = this.props.note ? this.props.note.id : undefined
    const prevNoteId = prevProps.note ? prevProps.note.id : undefined

    if(currentNoteId && currentNoteId !== prevNoteId) {
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body
      })
    }
  }


  render() {
    if (this.props.note) {
      return (
        <div className="editor">
          <input className="editor__title"
            value={this.state.title}
            placeholder="Untitled Note"
            onChange={this.handleTitleChange}/>

          <textarea className="editor__body"
            value={this.state.body}
            placeholder="your note here!"
            onChange={this.handleBodyChange}></textarea>

          <div>
            <button className="button button--secondary" onClick={this.openModal}>Delete Note</button>
            <RemoveModal isOpen={this.state.isModalOpen} onConfirmClose={this.handleConfirmedRemove} onDenyClose={this.handleDeniedRemove}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="editor">
          <p className="editor__message">
            { this.props.selectedNoteId ? 'Note not found.' : 'Pick or create a note to get started.'}
          </p>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedNote: (noteId) => dispatch(setSelectedNote(noteId)),
  startRemoveNote: (id) => dispatch(startRemoveNote(id)),
  startEditNote: (id, updates) => dispatch(startEditNote(id, updates))
})

const mapStateToProps = (state) => ({
  selectedNoteId: state.selectedNoteId,
  note: state.notes.filter((note) => note.id === state.selectedNoteId)[0]
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)