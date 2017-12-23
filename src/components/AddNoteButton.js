import React from 'react'
import { connect } from 'react-redux'

import { startAddNote } from '../actions/notes'

export class AddNoteButton extends React.Component {
  onClick = () => {
    this.props.startAddNote()
  }

  render() {
    return (
      <div className="item-list__header">
        <button className="button" onClick={this.onClick}>Create Note</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: () => dispatch(startAddNote())
})

export default connect(undefined, mapDispatchToProps)(AddNoteButton)