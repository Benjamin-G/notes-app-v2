import React from 'react'
import Modal from 'react-modal'

const RemoveModal = (props) => (
  <Modal isOpen={props.isOpen}
         onRequestClose={props.onDenyClose}
         contentLabel="Selected Option"
         closeTimeoutMS={333}
         ariaHideApp={false}
         className="modal">
    <h3 className="modal__title">Would you like to remove this note?</h3>
    <div>
      <button className="button button--modal" onClick={props.onConfirmClose}>Confirm</button>
      <button className="button" onClick={props.onDenyClose}>Deny</button>
    </div>
  </Modal>
)

export default RemoveModal