import React from 'react'

export class Editor extends React.Component {
  state = {
    title: 'test state title',
    body: 'test body'
  }

  fakeFun = () => {} 

  render() {
    if (true) {
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
            <button className="button button--secondary"
              onClick={this.fakeFun}>
              Delete Note</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="editor">
          <p className="editor__message">
            { true ? 'Note not found.' : 'Pick or create a note to get started.'}
          </p>
        </div>
      )
    }
  }

}