//Notes Reducer
const selectedNoteDefaultState = ""

export default (state = selectedNoteDefaultState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_NOTE' :
      return action.selectedNoteId
    default:
      return state
  }
}
