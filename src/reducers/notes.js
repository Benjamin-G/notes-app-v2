//Notes Reducer
const notesReducerDefaultState = []

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE' :
      return [...state, action.note]
    case 'REMOVE_NOTE' :
      return state.filter(({ id }) => id !== action.id)
    case 'SET_NOTES' :
      return action.notes
    default:
      return state
  }
}

