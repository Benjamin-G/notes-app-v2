import React from 'react'
import { connect } from 'react-redux'

import { setSelectedNote } from '../actions/selectednote'
import { startRemoveNote } from '../actions/notes'

class Editor extends React.Component {
  state = {
    title: '',
    body: '',
    isModalOpen: false
  }

  fakeFun = () => {} 

  onRemove = () => {
    this.props.startRemoveNote(this.props.selectedNoteId )
    this.props.setSelectedNote("")
  }

  componentDidUpdate(prevProps, prevState) {
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
            onChange={this.fakeFun}/>

          <textarea className="editor__body"
            value={this.state.body}
            placeholder="your note here!"
            onChange={this.fakeFun}></textarea>

          <div>
            <button className="button button--secondary" onClick={this.onRemove}>Delete Note</button>
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
  startRemoveNote: (id) => dispatch(startRemoveNote(id))
})

const mapStateToProps = (state) => ({
  selectedNoteId: state.selectedNoteId,
  note: state.notes.filter((note) => note.id === state.selectedNoteId)[0]
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)