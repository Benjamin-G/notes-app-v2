//Notes Reducer
const selectedNoteDefaultState = false

export default (state = selectedNoteDefaultState, action) => {
  switch (action.type) {
    case 'SET_NAV_OPEN' :
      return !state
    default:
      return state
  }
}